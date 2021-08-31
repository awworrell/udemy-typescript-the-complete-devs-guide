//import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
//import { ConsoleReport } from './reportTarget/ConsoleReport';
//import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
//import { HTMLReport } from './reportTarget/HTMLReport';



// const csvReader = new CsvFileReader('../football.csv');
// const matchReader = new MatchReader(csvReader);
// matchReader.load();

// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     new HTMLReport()
// );

//summary.buildandPrintReport(matchReader.matches);

const matchReader = MatchReader.fromCsv('../football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHTMLReport('Man United');
summary.buildandPrintReport(matchReader.matches);

