import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "font": "14px \"Lucida Grande\", Helvetica, Arial, sans-serif",
        "background": "#0ac986"
    },
    "a": {
        "color": "#00B7FF"
    },
    "alert-danger-cstm": {
        "color": "#a94442",
        "backgroundColor": "#f2dede",
        "borderColor": "#ebccd1",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderRadius": 5
    },
    "alert-success-cstm": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderRadius": 5
    },
    "*": {
        "boxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "fontFamily": "arial"
    },
    "image": {
        "width": 80,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto"
    },
    "image logo": {
        "maxWidth": 80
    },
    "h1": {
        "color": "#ccc",
        "textAlign": "center",
        "fontFamily": "'Vibur', cursive",
        "fontSize": 50
    },
    "login-form": {
        "width": 350,
        "paddingTop": 40,
        "paddingRight": 30,
        "paddingBottom": 40,
        "paddingLeft": 30,
        "background": "#eee",
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "borderRadius": 4,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": "50%",
        "MozTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "WebkitTransform": "translateY(-50%)",
        "transform": "translateY(-50%)"
    },
    "form-group": {
        "position": "relative",
        "marginBottom": 15
    },
    "form-control": {
        "width": "100%",
        "height": 50,
        "border": "2px solid #ddd",
        "paddingTop": 5,
        "paddingRight": 7,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "background": "#fff",
        "color": "#666",
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "borderRadius": 4
    },
    "form-control:focus": {
        "borderColor": "#10CE88",
        "color": "#10CE88"
    },
    "form-control:focus + fa": {
        "borderColor": "#10CE88",
        "color": "#10CE88"
    },
    "form-group fa": {
        "position": "absolute",
        "right": 15,
        "top": 17,
        "color": "#999"
    },
    "log-statuswrong-entry": {
        "MozAnimation": "wrong-log 0.3s",
        "WebkitAnimation": "wrong-log 0.3s",
        "animation": "wrong-log 0.3s"
    },
    "log-statuswrong-entry form-control": {
        "borderColor": "#ed1c24",
        "color": "#ed1c24"
    },
    "wrong-entry form-control + fa": {
        "borderColor": "#ed1c24",
        "color": "#ed1c24"
    },
    "log-btn": {
        "background": "#0AC986",
        "dispaly": "inline-block",
        "width": "100%",
        "fontSize": 16,
        "height": 50,
        "color": "#fff",
        "textDecoration": "none",
        "border": "none",
        "MozBorderRadius": 4,
        "WebkitBorderRadius": 4,
        "borderRadius": 4
    },
    "link": {
        "textDecoration": "none",
        "color": "#C6C6C6",
        "float": "right",
        "fontSize": 12,
        "marginBottom": 15
    },
    "link:hover": {
        "textDecoration": "underline",
        "color": "#8C918F"
    },
    "alert": {
        "display": "none",
        "fontSize": 12,
        "color": "#f00",
        "float": "left"
    }
});