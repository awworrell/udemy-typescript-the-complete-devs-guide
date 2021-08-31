"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { CsvFileReader } from './CsvFileReader';
var MatchReader_1 = require("./MatchReader");
//import { ConsoleReport } from './reportTarget/ConsoleReport';
//import { WinsAnalysis } from './analyzers/WinsAnalysis';
var Summary_1 = require("./Summary");
//import { HTMLReport } from './reportTarget/HTMLReport';
// const csvReader = new CsvFileReader('../football.csv');
// const matchReader = new MatchReader(csvReader);
// matchReader.load();
// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     new HTMLReport()
// );
//summary.buildandPrintReport(matchReader.matches);
var matchReader = MatchReader_1.MatchReader.fromCsv('../football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport('Man United');
summary.buildandPrintReport(matchReader.matches);
