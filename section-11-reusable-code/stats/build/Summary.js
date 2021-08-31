"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HTMLReport_1 = require("./reportTarget/HTMLReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildandPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    //static methods can be called off the base of the class like Summary.buildandPrintReport. Unlike calling an instance of summary with the methods then callable
    Summary.winsAnalysisWithHTMLReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HTMLReport());
    };
    ;
    return Summary;
}());
exports.Summary = Summary;
