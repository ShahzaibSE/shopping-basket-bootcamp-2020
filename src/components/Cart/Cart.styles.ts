import { makeStyles } from '@material-ui/core/styles';

export const tableStyles = makeStyles({
    root: {
      width: '100%',
      marginTop: 20,
      marginLeft: 30,
      marginRight: 20
    },
    container: {
      maxHeight: 700,
    },
    order_summary_container: {
      width: '100%',
      marginTop: 20
    },
    order_summary_root: {
      minWidth: 300,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      flexGrow: 1
    },
    order_summary_price: {
      fontSize:20,
      fontWeight: "bold",
      color: "black"
    },
    order_summary_action_container: {
      justifyContent: "center"
    },
    order_summary_header:{
      // backgroundColor: "#3f51b5"
      backgroundColor: "#60848e"
    },
    order_summary_header_typography: {
      fontWeight:"bold",
      color:"white",
      paddingLeft: 30
    },
    order_info_container: {
      paddingLeft:30,
      paddingRight:30,
      paddingBottom:40
    },
    no_of_items_label_container: {
      display: "inline-block",
    },
    no_of_items_value_container: {
      display: "inline-block",
      float: "right"
    },
    no_of_item_value: {
      fontWeight: "bold"
    },
    total_container: {
      paddingLeft: 30,
      paddingRight: 30
    },
    checkout_btn: {
      backgroundColor: "#f44336",
      width: "100%",
      color: "white"
    }
  });
