// content.js
let conditionCounter = 0;
let number = 0
function traverseFilterLayoutContentDivs() {
  const filterLayoutContentDivs = Array.from(document.querySelectorAll('.element-asset-card')).slice(0, 10);
  number++
  console.log("监控中。。监控的次数", number)

  let shouldStop = false; // 添加标志变量
  console.log("满足条件的次数", conditionCounter)

  filterLayoutContentDivs.forEach(outerDiv => {
    // 在外部 div 中查找包含特定类的内部 div 元素
      const assetPriceDiv = outerDiv.querySelector('.element-asset-card-price');
      const assetNameDiv = outerDiv.querySelector('.element-asset-name');
      const actionButton = outerDiv.querySelector('.element-asset-card-action');

      const assetPriceText = assetPriceDiv ? assetPriceDiv.textContent.trim() : '';
      const assetNameText = assetNameDiv ? assetNameDiv.textContent.trim() : '';

      // console.log('Asset Price:', assetPriceText);
      // console.log('Asset Name:', assetNameText);
      //
      const goods1 = parseFloat(assetPriceText) <= 0.005 && assetNameText === 'The Odyssey'
      // const goods2 = parseFloat(assetPriceText) <= 0.002 && assetNameText === 'Traversing the Lavender Sea'
      // const goods3 = parseFloat(assetPriceText) <= 0.002 && assetNameText === 'Dark Matter'
      // const goods4 = parseFloat(assetPriceText) <= 0.003 && assetNameText === 'Mechanical Encounter'
      // const goods5 = parseFloat(assetPriceText) <= 0.003 && assetNameText === 'Intergalactic Discourse'
      // const goods6 = parseFloat(assetPriceText) <= 0.002 && assetNameText === 'The Blueberry Nebula'
      // const goods7 = parseFloat(assetPriceText) <= 0.0002 && assetNameText === 'Enter The Odyssey'
      // const goods8 = parseFloat(assetPriceText) <= 0.002 && assetNameText === 'A Peculiar Encounter'
      // const goods9 = parseFloat(assetPriceText) <= 0.002 && assetNameText === 'Galaxy of the Predatoooors'
      // const goods10 = parseFloat(assetPriceText) <= 0.002 && assetNameText === 'The Treasureverse'
      // const goods11 = parseFloat(assetPriceText) <= 0.0003 && assetNameText === 'Travel in Packs'


      if (goods1) {
        console.log('有条件满足。。');
        shouldStop = true;

        showNotificationWithSound()
        // 每次满足条件时，增加计数器
        conditionCounter++;
        // simulateMouseOver(assetPriceDiv);

        // 在满足条件时点击按钮
         // setTimeout(() => {
        // 在满足条件时点击按钮
          // const actionDiv = outerDiv.querySelector('.element-asset-card-action-bar');
          // console.log(actionDiv)
          // const updatedActionButton = actionDiv.querySelector('.element-asset-card-acction-button buy-now rs-btn rs-btn-subtle rs-btn-sm');
          // console.log(updatedActionButton)
          // if (updatedActionButton) {
          //   updatedActionButton.click();
          //   console.log('点击按钮');
          // }
      // }, 1000); // 1秒的等待时间，根据实际情况调整
        return;
    }
  });

  //判断是否需要终止整个循环
  if (shouldStop) {
    // clearInterval(intervalId);
  }
}

function audioNotification(){
    var yourSound = new Audio('https://downsc.chinaz.net/Files/DownLoad/sound1/202309/y2123.mp3');
    yourSound.play();
}



function showNotificationWithSound() {
  if (!('Notification' in window)) {
    console.error('浏览器不支持通知');
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      // 创建通知，并设置声音选项
      console.log("开始通知")
      audioNotification()
      const notification = new Notification('重要提醒', {
        body: '您关心的条件已满足，请查看相关内容。',
        sound: '/Users/jinyu/Downloads/y2123.mp3', // 设置声音文件路径
      });

      notification.onclick = () => {
        console.log('通知被点击');
        // 这里可以添加点击通知后的操作，如打开相关页面等
      };
    } else {
      console.warn('通知权限被拒绝');
    }
  });
}

// function createAudio() {
//     const audioElm = document.createElement('audio');
//     audioElm.autoplay = true;
//     audioElm.muted = false;
//     audioElm.src = '/Users/jinyu/Downloads/y2214.wav';
//     return audioElm;
//   }

//   play() {if (!this.audioElm) {
//         this.audioElm = this.createAudio();
//         document.body.appendChild(this.audioElm);
//       }
//       this.audioElm.play();
//   }

// // 示例调用
// showNotificationWithSound();




function simulateMouseOver(element) {
  const event = new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  element.dispatchEvent(event);
}

// 每5秒执行一次遍历操作
const intervalId = setInterval(traverseFilterLayoutContentDivs, 1000);



// // 遍历页面上 class 为 "filter-layout-content" 的 div 元素
// function traverseFilterLayoutContentDivs() {
//   const filterLayoutContentDivs = document.querySelectorAll('.element-asset-card-image');
//   console.log(filterLayoutContentDivs.length)
//   filterLayoutContentDivs.forEach(div => {
//     // 在这里对每个 div 进行操作
//     console.log("hahhahahh"); 
//     // console.log(div.textContent); // 例: 输出 div 内容
//   });
// }

// // 在页面加载完成后执行遍历操作
// window.addEventListener('load', traverseFilterLayoutContentDivs);
