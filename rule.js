function pcAdress(mobileAdress, platform) {
  if (platform == 'qq') {
    return qqAdress(mobileAdress);
  } else if (platform == 'youku') {
    return youkuAdress(mobileAdress);
  } else if (platform == 'iqiyi') {
    return iqiyiAdress(mobileAdress);
  } else if (platform == 'mgtv') {
    return mgtvAdress(mobileAdress);
  } else {
    return mobileAdress;
  }
};

��Ѷ��Ƶ����
function qqAdress(mobileAdress) {
  var fullPath;
  var num = mobileAdress.indexOf('');
  var firstStr;
  if (num  0) {
    firstStr = mobileAdress.substr(0, num);
  } else {
    firstStr = mobileAdress;
  }
  var pos = firstStr.lastIndexOf('.html');
  if (pos + 5 == firstStr.length) {
    var vid;
    var cid;
    var firstStrArr = firstStr.split('');
    var htmlStr = firstStrArr[firstStrArr.length - 1];
    if (num  0) {
      var name, value;
      var param = mobileAdress.substr(num + 1);
      var params = param.split('&');
      var parammap = new Object();
      for (var i = 0; i  params.length; i++) {
        num = params[i].indexOf('=');
        if (num  0) {
          name = params[i].substring(0, num);
          value = params[i].substr(num + 1);
          parammap[name] = value;
        }
      }
      vid = parammap['vid'];
      cid = parammap['cid'];

      if (vid != null && vid.length == 0) {
        vid = null;
      }

      if (cid != null && cid.length == 0) {
        cid = null;
      }
    }
    var tfStr = 'httpsv.qq.comxcover';

    htmlStr = htmlStr.replace('.html', '');
    if (htmlStr == play) {
      htmlStr = null;
    }
    if (vid != null && cid != null) {
      if (htmlStr != null) {
        fullPath = tfStr + htmlStr + '' + cid + '' + vid + '.html';
      } else {
        fullPath = tfStr + cid + '' + vid + '.html';
      }

    } else if (vid != null) {
      if (htmlStr != null) {
        fullPath = tfStr + htmlStr + '' + vid + '.html';
      } else {
        fullPath = tfStr + vid + '.html';
      }
    } else if (cid != null) {
      if (htmlStr != null) {
        fullPath = tfStr + htmlStr + '' + cid + '.html';
      } else {
        fullPath = tfStr + cid + '.html';
      }
    } else {
      fullPath = tfStr + htmlStr + '.html';
    }
  } else {
    fullPath = mobileAdress;
  }
  var oStr = 'm.v.qq.com';
  var nStr = 'v.qq.com';
  if (fullPath.indexOf(oStr) = 0) {
    fullPath = fullPath.replace(oStr, nStr);
  }

  var oStr2 = 'coverc';
  var nStr2 = 'cover';
  if (fullPath.indexOf(oStr2) = 0) {
    fullPath = fullPath.replace(oStr2, nStr2);
  }

  return fullPath;
};

�ſ���Ƶ����
function youkuAdress(mobileAdress) {
  var fullPath;
  var num = mobileAdress.indexOf('');
  var firstStr;
  if (num  0) {
    firstStr = mobileAdress.substr(0, num);
  } else {
    firstStr = mobileAdress;
  }
  if (firstStr.indexOf('id_')  0) {
    fullPath = firstStr;
    var oStr = 'm.youku.comvideo';
    var nStr = 'v.youku.comv_show';
    if (fullPath.indexOf(oStr) = 0) {
      fullPath = fullPath.replace(oStr, nStr);
    }
  } else {
    fullPath = mobileAdress;
  }
  fullPath = fullPath.replace('https', 'http');
  return fullPath;
};

��������Ƶ����
function iqiyiAdress(mobileAdress) {
  var fullPath = mobileAdress;
  var oStr = 'm.iqiyi.com';
  var nStr = 'www.iqiyi.com';
  if (fullPath.indexOf(oStr) = 0) {
    fullPath = fullPath.replace(oStr, nStr);
  }
  return fullPath;
};

â��TV��Ƶ����
function mgtvAdress(mobileAdress) {
  var fullPath = mobileAdress;
  var oStr = 'm.mgtv.com';
  var nStr = 'www.mgtv.com';
  if (fullPath.indexOf(oStr) = 0) {
    fullPath = fullPath.replace(oStr, nStr);
  }
  oStr = '#';
  nStr = '';
  if (fullPath.indexOf(oStr) = 0) {
    fullPath = fullPath.replace(oStr, nStr);
  }
  var pos = fullPath.lastIndexOf('.html');
  if (pos + 5 != fullPath.length) {
    fullPath = fullPath + '.html';
  }
  return fullPath;
};