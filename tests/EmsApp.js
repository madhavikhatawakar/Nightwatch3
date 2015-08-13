module.exports = {
  'Demo test Ems App' : function (client) {
    client
      .url('http://localhost:5024/EmployeeApplicationSprint4-1.0-SNAPSHOT')
      .waitForElementVisible('body', 1000)
     .assert.urlEquals('http://localhost:5024/EmployeeApplicationSprint4-1.0-SNAPSHOT/')
     // .assert.visible("#ListEmployeeLink")
      .click("#ListEmployeeLink")
     .pause(5000)
      .assert.elementPresent("body > div.smart-green > table > tbody > tr:nth-child(4) > td:nth-child(5) > a")
    .assert.elementPresent("body > div.smart-green > table > tbody > tr:nth-child(6) > td:nth-child(5) > a")
     .end();
  }
    
   
};