# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 思路

## 安装

electron-is-dev
concurrently:连接多个命令，中间空格分开
wait-on:等待某个结果执行之后再去执行后续命令
cross-env:跨平台的环境变量设置

<!-- bootstrap:UI组件库
styled-components:自定义样式 -->

## 可视化界面及剪切操作

Web Audio API

### 文件获取及处理
X dialog/electron + fs/node --> 选中文件输出为ArrayBuffer
- 问题：
  > Module not found: Error: Can't resolve 'fs' in '/Users/jim/Project/xcLibrary/music-editor/node_modules/electron
  

  > 解决 ：require写成window。require
  ```
    const { dialog } = window.require('electron')
  ```

- 问题：
  > https://www.baidu.com/s?wd=Uncaught+TypeError%3A+window.require+is+not+a+function&tn=84053098_3_dg&ie=utf-8

  > 解决：在main.js加入
    ```
      webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    ```

- 问题：
  > https://www.baidu.com/s?wd=Cannot+read+properties+of+undefined+(reading+%27showOpenDialog%27)&tn=84053098_3_dg&ie=utf-8

  > 解决：问题出在showOpenDialog的上一层

- 问题：electron写在react哪里


X ArrayBuffer 通过 AudioContext.decodeAudioData() 方法 转换为AudioBuffer--可以被Web Audio API操作

X 


### 结构
editor-音频操作  

bridge-链接editor和window window-视图

window是渲染层控制



//裁剪
// //获取audioBuffer数据的方式之一
// fetch(audioUrl).then(res => res.arrayBuffer()).then(buffer => {
//   // 获取音频二进制数据
//   const audioCtx = new audioContext();
//   audioCtx.decodeAudio(buffer).then(audioBuffer => {
//     // 获取音频解码后的audioBuffer数据
//     // to do sth
//   })
// });

// clipAudio(audioBuffer, duration, startOffset = 0){
//   return new Promise((resolve, reject) => {
//     // 获取音频通道数量
//     const channels = audioBuffer.numberOfChannels;
//     // 获取采样率
//     const rate = audioBuffer.sampleRate;
//     // 计算截取后需要的采样数量
//     const endOffset = rate * duration; const frameCount = endOffset - 0;
//     // 创建新的audioBuffer数据
//     const newAudioBuffer = new AudioContext().createBuffer(channels, frameCount, rate);
//     // 创建Float32的空间,作为copy数据的载体
//     const anotherArray = new Float32Array(frameCount);
//     // 裁剪后放置的起始位置
//     const offset = 0;
//     // 遍历通道,将每个通道的数据分别copy到对应的newAudioBuffer的通道
//     for (let channel = 0; channel < channels; channel++) {
//       audioBuffer.copyFromChannel(anotherArray, channel, rate * startOffset);
//       newAudioBuffer.copyToChannel(anotherArray, channel, offset);
//     }
//     // 完成裁剪
//     resolve(newAudioBuffer);
//   })
// };





 //创建音频上下文实例
  // const AudioContext = window.AudioContext;
  // const audioContext = new AudioContext();

  //获取源并传入audioContext
  var audioElement = document.querySelector('audio');
  // const track = audioContext.createMediaElementSource(audioElement);







  file.addEventListener('change', function() {
    var file = this.files[0]
    var reader = new FileReader()

    reader.onload = function() {
      output.innerHTML = '<img src="' + reader.result + '">'
    }
    reader.read
  })








//裁剪
// //获取audioBuffer数据的方式之一
// fetch(audioUrl).then(res => res.arrayBuffer()).then(buffer => {
//   // 获取音频二进制数据
//   const audioCtx = new audioContext();
//   audioCtx.decodeAudio(buffer).then(audioBuffer => {
//     // 获取音频解码后的audioBuffer数据
//     // to do sth
//   })
// });

// clipAudio(audioBuffer, duration, startOffset = 0){
//   return new Promise((resolve, reject) => {
//     // 获取音频通道数量
//     const channels = audioBuffer.numberOfChannels;
//     // 获取采样率
//     const rate = audioBuffer.sampleRate;
//     // 计算截取后需要的采样数量
//     const endOffset = rate * duration; const frameCount = endOffset - 0;
//     // 创建新的audioBuffer数据
//     const newAudioBuffer = new AudioContext().createBuffer(channels, frameCount, rate);
//     // 创建Float32的空间,作为copy数据的载体
//     const anotherArray = new Float32Array(frameCount);
//     // 裁剪后放置的起始位置
//     const offset = 0;
//     // 遍历通道,将每个通道的数据分别copy到对应的newAudioBuffer的通道
//     for (let channel = 0; channel < channels; channel++) {
//       audioBuffer.copyFromChannel(anotherArray, channel, rate * startOffset);
//       newAudioBuffer.copyToChannel(anotherArray, channel, offset);
//     }
//     // 完成裁剪
//     resolve(newAudioBuffer);
//   })
// };




```
    
  //获取audioBuffer数据的方式之一
  fetch(audioUrl).then(res => res.arrayBuffer()).then(buffer => {  
    // 获取音频二进制数据
    const audioCtx = new audioContext();
    audioCtx.decodeAudio(buffer).then(audioBuffer => {  
      // 获取音频解码后的audioBuffer数据
      // to do sth
    })});

    clipAudio(audioBuffer, duration, startOffset = 0){
      return new Promise((resolve, reject) => {
        // 获取音频通道数量
        const channels = audioBuffer.numberOfChannels;
        // 获取采样率
        const rate = audioBuffer.sampleRate;
        // 计算截取后需要的采样数量
        const endOffset = rate * duration;const frameCount = endOffset - 0;
        // 创建新的audioBuffer数据
        const newAudioBuffer = new AudioContext().createBuffer(channels,frameCount,rate);
        // 创建Float32的空间,作为copy数据的载体
        const anotherArray = new Float32Array(frameCount);
        // 裁剪后放置的起始位置
        const offset = 0;
        // 遍历通道,将每个通道的数据分别copy到对应的newAudioBuffer的通道
        for(let channel = 0; channel < channels;channel++){
          audioBuffer.copyFromChannel(anotherArray, channel, rate * startOffset);
          newAudioBuffer.copyToChannel(anotherArray, channel, offset);}
          // 完成裁剪
          resolve(newAudioBuffer);
        })};

```

