import React from "react";
// import Tesseract from "tesseract.js";
import "./UpCertificate.css";
import NavBar from "./NavBar";

const addCertificate = "https://hash-define-api.herokuapp.com/addCertificates";

const orgUrl = "https://hash-define-api.herokuapp.com/getOrgEthValues";
const orgTypeUrl = "https://hash-define-api.herokuapp.com/getOrgTypeEthValues";
const certUrl = "https://hash-define-api.herokuapp.com/getCertTypeEthValues";


class UpCertificate extends React.Component {
  start = () => {
    document.querySelector("textarea").innerHTML = "";
    const rec = new this.Tesseract.TesseractWorker();
    rec
      .recognize(this.fileSelector.files[0])
      .progress(function (response) {
        if (response.status == "recognizing text") {
          /*progress.innerHTML=response.status+'   '+response.progress*/
        } else {
          /* progress.innerHTML=response.status*/
        }
      })
      .then(function (data) {
        console.log("data", data);
        document.querySelector("textarea").innerHTML = data.text;
        /*progress.innerHTML='Done'*/
        console.log(data.text);
        // this.finalData = data.text.split('\n');
        const textToBLOB = new Blob([data.text], { type: "text/plain" });
        const sFileName = "formData.txt";
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        
        return data.text.split("\n");
      })
      .then((finalData) => {
        let ans = [];
        for (let data of finalData) {
          data = data.split(",");
          for (let d of data) ans.push(d.trim());
        }
        console.log("finalData", finalData);
        return ans;
      })
      .then((ans) => {
        console.log("ans: ", ans);
        let hasGFG = ans.length > 12 ? true : false;
        if (hasGFG) {
          // document.getElementById('email').value = finalData[0];
          document.getElementById("name").value = ans[3];
          document.getElementById("orgName").value = ans[10];
          document.getElementById("orgType").value = "tech";
          document.getElementById("certType").value = "completion";
          document.getElementById("certFor").value = ans[5];
          document.getElementById("timeDuration").value = "Jan 2022";
          document.getElementById("validTill").value = "Jan 2023";
        } else {
          document.getElementById("name").value = ans[4];
          document.getElementById("orgName").value = ans[0];
          document.getElementById("orgType").value = "tech";
          document.getElementById("certType").value = "completion";
          document.getElementById("certFor").value = ans[7];
          document.getElementById("timeDuration").value = ans[5];
          document.getElementById("validTill").value = ans[5];
        }
      });
  };
  componentDidMount() {
    this.Tesseract = window.Tesseract;
    //first show image on upload
    this.fileSelector = document.querySelector("input");
    this.img = document.querySelector("#images");
    this.progress = document.querySelector(".progress");
    this.textarea = document.querySelector("textarea");
    this.fileSelector.onchange = () => {
      var file = this.fileSelector.files[0];
      var imgUrl = window.URL.createObjectURL(
        new Blob([file], { type: "image/jpg" })
      );
      this.img.src = imgUrl;
      this.start();
    };

    document.getElementById("start-btn").addEventListener("click", () => {
      this.start();
    });
  }

  generateCertificate = (event) => {
    event.preventDefault();
    if (document.getElementById("email").value === "") {
      alert("Please enter email");
      return;
    }
    console.log("submitted");
    let v = Math.random();
    v *= 0.00001;
    document.getElementById('ethVal').innerHTML = v + "ETH";
    console.log('vvvvv', v);
    // console.log('event target ', event.target);
    // console.log(event.target.name.value)
    let email = event.target.email.value;
    let orgName = event.target.orgName.value;
    let orgType = event.target.orgType.value;
    let certificateType = event.target.certType.value;
    let certificateFor = event.target.certFor.value;
    let personName = event.target.name.value;
    let timeDuration = event.target.timeDuration.value;
    let validTill = event.target.validTill.value;

    fetch(addCertificate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        orgName: orgName,
        orgType: orgType,
        certificateType: certificateType,
        certificateFor: certificateFor,
        personName: personName,
        timeDuration: timeDuration,
        validTill: validTill,
      }),
    })
      .then((res) => {
        console.log("res", res);
        // console.log(v)
        if (res.status === 200) {
          alert("Certificate added successfully");
          return true;
        } else {
          alert("Something went wrong");
          return false;
        }
      })
    //   .then((val) => {
    //     // if (val === false) return false;
        
    //     alert('here')
    //     let orgTypeValue = 0,
    //       certTypeValue = 0,
    //       orgValue = 0;

    //     fetch(orgUrl + "?orgName=" + orgName, {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         orgValue = data;
    //         // console.log('orgValue: ', orgValue);
    //       })
    //       .then(() => {
    //         fetch(orgTypeUrl + "?orgType=tech", {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //           },
    //         })
    //           .then((res) => res.json())
    //           .then((data) => {
    //             orgTypeValue = data;
    //             // console.log('orgTypeValue: ', orgTypeValue);
    //           })
    //           .then(() => {
    //             fetch(certUrl + "?certType=" + certificateType, {
    //               method: "GET",
    //               headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //               },
    //             })
    //               .then((res) => res.json())
    //               .then((data) => {
    //                 certTypeValue = data;
    //                 // console.log('certTypeValue: ', certTypeValue);
    //               })
    //               .then(() => {
    //                 console.log("orgTypeValue: ", orgTypeValue);
    //                 console.log("certTypeValue: ", certTypeValue);
    //                 console.log("orgValue: ", orgValue);

    //                 // now update the eth values of required domain
    //                 let tmpEthValue = parseInt(orgTypeValue.ethValue) * parseInt(certTypeValue.ethValue) * parseInt(orgValue.ethValue);
    //                 console.log("tmpEthValue: ", tmpEthValue);

    //                 let updateEthValue =
    //                   "https://hash-define-api.herokuapp.com/updateEthValue?email=" +
    //                   email +
    //                   "&ethValues=" +
    //                   tmpEthValue +
    //                   ",0,0,0";
    //                 // ?email=sayan@gmail.com&ethValues=0.1,0.4,0,0";
    //                 fetch(updateEthValue, {
    //                   method: "POST",
    //                   headers: {
    //                     "Content-Type": "application/json",
    //                   },
    //                 }).then((res) => {
    //                   console.log("res", res);
    //                   if (res.status === 200) {
    //                     alert("Eth value updated successfully");
    //                     res.send("Eth value updated successfully");
    //                   } else {
    //                     alert("Something went wrong");
    //                     res.send("Something went wrong");
    //                   }
    //                 });
    //               });
    //           });
    //       })
          .catch((err) => {
            console.log("err", err);
          });
    //   });
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="divider">
          <div className="bottom">
            <div>
              <img className="certificate" id="images" src="" alt="img" />
            </div>
            <div className="textarea" style={{ display: "none" }}>
              <textarea
                placeholder="Text"
                rows="9"
                cols="60"
                //   contentEditable="true"
                //   readOnly
              ></textarea>
            </div>
          </div>
          <div className="containerN2">
            <label className="custom-file-upload">
              <input type="file" id="yourBtn" className="button-1" />
              <p>Upload File</p>
            </label>
            <button className="start button-1" id="start-btn">
              Start
            </button>
            <div className="progress"></div>
          </div>
          <script src="upload-certificate.js"></script>
        </div>

        <form
          id="finalForm"
          action="POST"
          onSubmit={(e) => {
            this.generateCertificate(e);
          }}
        >
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" required />
          <label htmlFor="Name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="orgName">Organization Name:</label>
          <input type="text" name="orgName" id="orgName" />
          <label htmlFor="orgType">Organization Type:</label>
          <input type="text" name="orgType" id="orgType" />
          <label htmlFor="certType">Certificate Type:</label>
          <input type="text" name="certType" id="certType" />
          <label htmlFor="certFor">Certificate For:</label>
          <input type="text" name="certFor" id="certFor" />
          <label htmlFor="timeDuration">Time Duration:</label>
          <input type="text" name="timeDuration" id="timeDuration" />
          <label htmlFor="validTill">Valid Till:</label>
          <input type="text" name="validTill" id="validTill" />
          <button type="submit">Generate Certificate</button>
          <button type="button" id='ethVal'>0 ETH</button>
        </form>
      </div>
    );
  }
}
export default UpCertificate;
