# react-native-custom-headers

Custom headers for react-native using react-navigation for managing navigations in react-native apps.
=======
# REACT-NATIVE-CUSTOM-HEADERS!
[![Twitter](https://img.shields.io/twitter/url?color=gg&label=react-native-custom-headers&style=plastic&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-native-custom-headers)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-native-custom-headers)

react-native custom headers for creating custom headers for the app using the [react-navigation](https://github.com/react-navigation/react-navigation) package for managing navigations in their app.

# Installation

    npm install react-native-custom-headers --save

# PROPS
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `navigation`| ---- | `navigation` | **REQUIRED** Pass the navigation prop|
| `headerName` | `String` | `Empty` | Enable Header Title |
| `showHeaderImage`| `Boolean` | ------- | Enable Header Image |
| `headerImagePath` | `path` | ------- | **Required** (if showHeaderImage is taken true) |
| `headerColor` | `String` | ------- | Header Bar Color |
| `headerTextStyle` | `Stylesheet` | ------- | Custom stylesheet to Header Title |

# Screenshots
```
![Alt text]
```
```
![Alt text]
```

# HOW TO USE?
Import it using:

`import Header from 'react-native-custom-headers;`

and then,

    <Header navigation={this.props.navigation}
    showHeaderImage={false}
    backImagePath ={require('./resources/back.png')}
    headerImagePath = {require('./resources/logo.png')}
    headerName={'SUB CATEGORY'}/>
`

You can also use this component with react-navigation custom header call like this,

```
navigationOptions: {
  header: props => <Header {...props} />,
},
```
**OR**,
```
Reclaim: {
    screen: GiftReclaimSection,
    navigationOptions: {
      tabBarLabel: 'Reclaim',
      header: <Header/>,
    }
  }
```
**OR** like this also,
```
static navigationOptions = {
    header: <Header/>,
  };
 
```
