import{Y as t,Z as a,X as c}from"./index-v321.js";function d(o,e){Array.isArray(e)&&(e=JSON.stringify(e)),e.toString&&(e=e.toString()),e.includes("ChunkLoadError")?r(o):p(o,e)}function p(o,e){const i=`
    <div style="display: flex; flex-direction: row">
      <div style="font-size: 60px; color: #d50f25; padding: 0 10px">
        <i class="fas fa-exclamation-circle"></i>
      </div>
      <div style="padding: 10px">
        ${o("app.An error occurred")}
        <br><br>
        <i>${e}</i>
      </div>
    </div>
  `;t.create({title:"Oops!",message:i,html:!0,ok:{label:o("common.Close"),unelevated:"",color:"primary",noCaps:""}})}function f(o,e){e.toString&&(e=e.toString());const i=`
    <div style="display: flex; flex-direction: row; align-items: center">
      <div style="font-size: 60px; color: #d50f25; padding: 0 10px">
        <i class="fas fa-exclamation-circle"></i>
      </div>
      <div style="padding: 10px">
        ${e}
      </div>
    </div>
  `;t.create({title:"Oops!",message:i,html:!0,ok:{label:o("common.Close"),unelevated:"",color:"primary",noCaps:""}})}function m(o,e){const i=`
    <div style="display: flex; flex-direction:row;">
      <div style="font-size:60px; color:#f2c037; padding: 0 10px">
        <i class="fas fa-question-circle"></i>
      </div>
      <div style="padding: 10px">
        ${e}
      </div>
    </div>
  `;return new Promise(l=>{t.create({title:o("app.Confirm"),message:i,html:!0,ok:{label:o("common.OK"),unelevated:"",color:"primary",noCaps:""},cancel:{label:o("common.Cancel"),flat:"",noCaps:""}}).onOk(()=>l(!0)).onCancel(()=>l(!1))})}function v(o,e,i){const l=`
    <div style="display: flex; flex-direction:row;">
      <div style="font-size:60px; color:#f2c037; padding: 0 10px">
        <i class="fas fa-question-circle"></i>
      </div>
      <div style="padding: 10px">
        ${e}
      </div>
    </div>
  `;t.create({title:o("app.Confirm"),message:l,html:!0,ok:{label:o("common.OK"),unelevated:"",color:"primary",noCaps:""},cancel:{label:o("common.Cancel"),flat:"",noCaps:""}}).onOk(()=>i())}function u(o,e,i){const l=`
    <div style="display: flex; flex-directvion:row;">
      <div style="font-size:60px; color:#3369e8; padding: 0 10px">
        <i class="fas fa-question-circle"></i>
      </div>
      <div style="padding: 10px">
        ${i}
      </div>
    </div>
  `;return new Promise(n=>{t.create({title:e,message:l,html:!0,ok:{label:o("optionsdialog.Yes"),unelevated:"",color:"primary",noCaps:""},cancel:{label:o("optionsdialog.No"),unelevated:"",color:"primary",noCaps:""}}).onOk(()=>n(!0)).onCancel(()=>n(!1))})}function r(o){const e=`
    <div style="display: flex; flex-direction: row">
      <div style="font-size: 60px; color: #3369e8; padding: 0 10px">
        <i class="fas fa-info-circle"></i>
      </div>
      <div style="padding: 10px">
        ${o("app.There is a new version")}
      </div>
    </div>
  `;t.create({title:o("app.New version available"),message:e,html:!0,ok:{label:o("common.Reload"),unelevated:"",color:"primary",noCaps:""},cancel:{label:o("common.Cancel"),flat:"",noCaps:""}}).onOk(()=>location.reload(!0))}function y(o){a.create({message:o,position:s(),actions:[{icon:"fas fa-times",color:"white"}]})}function x(o,e,i){a.create({message:e,position:s(),actions:[{label:o("common.Undo"),color:"white",noCaps:"",timeout:7e3,handler:i},{icon:"fas fa-times",color:"white"}]})}function h(o,e,i="text"){return new Promise(l=>{t.create({title:e,prompt:{model:"",type:i},ok:{label:o("common.OK"),unelevated:"",color:"primary",noCaps:""},cancel:{label:o("common.Cancel"),flat:"",noCaps:""}}).onOk(l)})}function s(){return c.is.mobile?"top":"bottom"}const b=Object.freeze(Object.defineProperty({__proto__:null,confirm:m,confirmWithCallback:v,showBasicError:f,showError:d,showNewVersionPrompt:r,showNotification:y,showNotificationWithUndo:x,textAnswer:h,yesNoChoice:u},Symbol.toStringTag,{value:"Module"}));export{b as M,y as a,f as b,m as c,x as d,v as e,d as s,h as t,u as y};
