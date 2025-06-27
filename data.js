var APP_DATA = {
  "scenes": [
    {
      "id": "0-render-360-11",
      "name": "render 360 1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0033476884030055,
          "pitch": -0.008129954855844446,
          "rotation": 4.71238898038469,
          "target": "1-render-360-2"
        },
        {
          "yaw": 1.343727716260691,
          "pitch": 0.04883240297058933,
          "rotation": 7.853981633974483,
          "target": "2-renderder-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-render-360-2",
      "name": "render 360 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4105079547828474,
          "pitch": 0.1368653358553118,
          "rotation": 0,
          "target": "2-renderder-3"
        },
        {
          "yaw": 0.7399743029759289,
          "pitch": 0.18968131032146118,
          "rotation": 1.5707963267948966,
          "target": "0-render-360-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-renderder-3",
      "name": "renderder 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19287968056133664,
          "pitch": -0.16552621212380458,
          "rotation": 4.71238898038469,
          "target": "0-render-360-11"
        },
        {
          "yaw": 0.5039433998821501,
          "pitch": 0.0037381705019861045,
          "rotation": 0,
          "target": "1-render-360-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "meeting room-REV.1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
