const parseXlsx =  require('excel').default;


 
parseXlsx('../stations.xlsx').then((data) => {
  // data is an array of arrays
  console.log(data);
});