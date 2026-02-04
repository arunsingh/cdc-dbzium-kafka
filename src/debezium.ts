import axios from 'axios';

const connectorConfig = {
  name: "postgres-connector",
  config: {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "postgres",
    "database.port": "5432",
    "database.user": "postgres",
    "database.password": "postgres",
    "database.dbname": "inventory",
    "topic.prefix": "main",
    "plugin.name": "pgoutput",
    "slot.name": "debezium_slot",
    "publication.autocreate.mode": "filtered",
    "transforms": "unwrap",
    "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",
    "transforms.unwrap.drop.tombstones": "false",
    "transforms.unwrap.delete.handling.mode": "rewrite",
    "transforms.unwrap.add.fields": "op,source.ts_ms,source.db",  // Changed this line
    "transforms.unwrap.add.headers": "op"  // Also add as header
  }
};

async function createConnector() {
  try {
    const response = await axios.post(
      'http://localhost:8083/connectors',
      connectorConfig,
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log('Connector created:', response.data);
  } catch (err: any) {
    console.error('Error creating connector:', err.response?.data || err.message);
  }
}

async function deleteConnector() {
  try {
    const response = await axios.delete(
      'http://localhost:8083/connectors/postgres-connector'
    );
    console.log('Connector deleted:', response.status);
  } catch (err: any) {
    if (err.response?.status === 404) {
      console.log('Connector does not exist, nothing to delete');
    } else {
      console.error('Error deleting connector:', err.response?.data || err.message);
    }
  }
}

async function setupConnector() {
  await deleteConnector();
  await createConnector();
}

setupConnector();