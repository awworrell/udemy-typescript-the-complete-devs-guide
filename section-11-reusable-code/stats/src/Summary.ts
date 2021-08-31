import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HTMLReport } from "./reportTarget/HTMLReport";

//these interfaces are used in composition inside of the reporting. The idea is that you can pass in the output target you want for different kinds of reporting
export interface Analyzer {
    run (matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildandPrintReport(matches: MatchData[]): void {
       const output =  this.analyzer.run(matches);
       this.outputTarget.print(output);

    }
    //static methods can be called off the base of the class like Summary.buildandPrintReport. Unlike calling an instance of summary with the methods then callable
    static winsAnalysisWithHTMLReport(team: string): Summary{
        return new Summary(
            new WinsAnalysis(team),
            new HTMLReport()
        )
    };
}
