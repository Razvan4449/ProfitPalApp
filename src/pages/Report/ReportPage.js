import React, { useEffect, useState } from 'react';
import { useLocalState } from '../utils/useLocalStorage';
import ajax from '../Services/FetchService';
import "./ReportPage.css"
import { rule1, rule10, rule11, rule12, rule13, rule14, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9 } from '../utils/ruleValidators';

function ReportPage() {
  const [report, setReport] = useState("")
  const [jwt, setJwt] = useLocalState("", "jwt")

  const reportId = window.location.href.split("/report/")[1];

  useEffect(() => {
    ajax("/api/report/" + reportId, "GET", jwt)
      .then((response) => {
        setReport(JSON.parse(response.message))
        console.log(report)
      }).catch(e => {
        console.log(e);
      });
  }, [])

  function buyReport() {
    ajax("/api/report/" + reportId + "/buyReport", "PUT", jwt)
      .then((response) => {
        window.location.reload()
      }).catch(e => {
        console.log(e);
      });
  }


  return (
    <div className="container">
      <h1 className="header">Report page</h1>

      {report ? (
        <>
          <div className="report-details">
            <h1>Company Symbol: {report.companySymbol}</h1>
            <div>Date of creation: {report.date}</div>
          </div>

          <div className="rule">
            Rule no.1{' '}
            {rule1(report.rule1) ? (
              <div className="passed">Passed</div>
            ) : (
              <div className="notPassed">Not passed</div>
            )}
          </div>

          <div className="rule">
            Rule no.2{' '}
            {rule2(report.rule2) ? (
              <div className="passed">Passed</div>
            ) : (
              <div className="notPassed">Not passed</div>
            )}
          </div>

          <div className="rule">
            Rule no.3{' '}
            {rule3(report.rule3) ? (
              <div className="passed">Passed</div>
            ) : (
              <div className="notPassed">Not passed</div>
            )}
          </div>

          {report.paidReport ? (
            <>
              <div className="rule">
                Rule no.4{' '}
                {rule4(report.rule4) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.5{' '}
                {rule5(report.rule5) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.6{' '}
                {rule6(report.rule6) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.7{' '}
                {rule7(report.rule7) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.8{' '}
                {rule8(report.rule8) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.9{' '}
                {rule9(report.rule9) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.10{' '}
                {rule10(report.rule10) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.11
                <div className="notPassedResearch">Still in research</div>
              </div>
              <div className="rule">
                Rule no.12{' '}
                {rule12(report.rule12) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.13{' '}
                {rule13(report.rule13) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
              <div className="rule">
                Rule no.14{' '}
                {rule14(report.rule14) ? (
                  <div className="passed">Passed</div>
                ) : (
                  <div className="notPassed">Not passed</div>
                )}
              </div>
            </>
          ) : (
            <div className="paid-report-message">
              Wanna see the rest of the report?{' '}
              <button onClick={() => buyReport()} className="buy-report-button">
                Buy the full report
              </button>
            </div>
          )}
        </>
      ) : (
        <div> {/* Your placeholder content */} </div>
      )}
    </div>
  );
}

export default ReportPage;
