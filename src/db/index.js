import jsonSqlModule from 'json-sql';


export default async (records, table, pool) => {
  console.log(`Inserting ${records.length} records into ${table} table`);
  const connection = await pool.getConnection();
  
  const inserts = records.map(async (element, index) => {
    const jsonSql = jsonSqlModule();
    const result = await jsonSql.build({
      type: 'insert',
      table: table,
      values: element
    });
    const standard = result.query.replace(/\$/g, ':');
    const removeQuotes = standard.replace(/"/g, '');
    try{
      await connection.execute(removeQuotes, result.values);
      console.log(`Inserted row ${index} into ${table} table`);
    }
    catch(err){
      console.log(err);
    }
  });
  await Promise.all(inserts);
  connection.release();
};