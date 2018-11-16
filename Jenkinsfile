pipeline {
  agent any
  parameters {
    string(name: "BRANCH", defaultValue: "development", description: "What branch/tag do you want to run?")
    choice(name: "DEPLOYMENT_TYPE", choices: ["tag", "branch"], description: "Type of deployment?")
  }
  stages {
    stage("Deploy") {
       steps {
         sshagent(credentials: ["jenkins"]) {
           sh "ssh -o StrictHostKeyChecking=no -l root 104.248.111.120 sh /root/backend/dds-backend-up.sh ${params.DEPLOYMENT_TYPE} ${params.BRANCH}"
           sh "ssh -o StrictHostKeyChecking=no -l root 104.248.111.120 sh /root/docker/start.sh"
         }
       }
    }
  }
}