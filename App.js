import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React,{useEffect , useState} from "react";




export default function App() {

  const [data ,setData]=useState([])
  const dataApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result =await result.json();
    setData(result)
   
  };
  useEffect(()=>{
    dataApi()
  },[])
  
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>FlatList with API</Text>
      
        {
          data.length?
          <FlatList
          data={data}
          renderItem={({item})=><View style={styles.main}>
            <Text style={styles.ID}>  ID : {item.id}</Text>
            <Text style={styles.title}>  TITLE : {item.title}</Text>
            <Text style={styles.body}>    {item.body}</Text>
          </View>}/>:null
        }
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#2F539B",
    color: "white",
    padding: 10,
  },
  ID:{
    fontSize:20,
    color:"white",
    backgroundColor:"#2B3856",
  },
  title:{
    fontSize:18,
    color:"red",
    backgroundColor:"#550A35"
  },
  body:{
    fontSize:16,
    color:"blue",
    backgroundColor:"#A0D6B4"
  },
  main:{
    borderBottomColor:"#0C090A",
    borderBottomWidth:2,
    padding:10,
  }
});
