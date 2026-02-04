import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:29092"],
});

const consumer = kafka.consumer({
  groupId: "main.products"
});

async function main() {
  await consumer.connect();

  await consumer.subscribe({
    topic: "main.public.products",
    fromBeginning: false,
  });

  console.log("🚀 Listening to CDC events...");

  await consumer.run({
    eachMessage: async ({ message }) => {
      if (!message.value) return;
      const data = JSON.parse(message.value.toString());
      console.log(data.payload);

      // Do your Operations.

      //  - Sync to Elasticsearch
      //  - Cache invalidation etc

    }
  });

}

main().catch(console.error);
