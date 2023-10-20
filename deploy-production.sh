#!/bin/bash
output=/home/ubuntu/webhook.log
cd /home/ubuntu/kurabun-ec
git pull >> $output
now=`date`
printf "$now Start deploying..." >> $output
curl -d "text=Bắt đầu deploy kurabun-ec lên production ☕️☕️☕️" -d "channel=CR9BZJ7U6" -H "Authorization: Bearer $SLACK_TOKEN" -X POST https://slack.com/api/chat.postMessage
source /home/ubuntu/.nvm/nvm.sh
nvm use >> $output
now=`date`
printf "$now Runing npm ci..." >> $output
npm ci
npm run build >> $output
pm2 reload kurabun-ec && pm2 reset kurabun-ec >> $output
curl -d "text=Deploy kurabun-ec lên production thành công 🚀🚀🚀" -d "channel=CR9BZJ7U6" -H "Authorization: Bearer $SLACK_TOKEN" -X POST https://slack.com/api/chat.postMessage