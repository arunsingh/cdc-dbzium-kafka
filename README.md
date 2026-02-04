
# CDC - Change Data Capture

A real-time data synchronization system using Debezium, PostgreSQL, and Kafka to capture and stream database changes.


![Diagram](https://i0.wp.com/blog.mshakhtour.com/wp-content/uploads/2025/11/debezium-and-kafka-data-flow.png?fit=1200%2C800&ssl=1)



### Prerequisites
- Docker & Docker Compose
- Node.js (v16 or higher)
- TypeScript
- PostgreSQL
- Apache Kafka
- Kafka Connect with Debezium




### Installation

Clone the repository

```
git clone https://github.com/Pratik610/cdc-debezium.git 

cd cdc-debezium
```

Install dependencies

```
npm install 

```

Start the infrastructure

```
 docker-compose up -d
```

Verify services are running

``` 
docker-compose ps  
```

### Demo Setup

Build Your App
```
npm run build

```

Configuring the Database to Connect and Create a Table
```
npm run db

```

Setting up Debezium 
```
npm run connect

```

Running the Consumer
```
npm run dev

```




