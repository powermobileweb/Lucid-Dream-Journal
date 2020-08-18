import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' }); 

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };

  render() {
    return (
      <View style={{flex:1,padding:'5%',backgroundColor:"#413298"}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={{ backgroundColor: 'transparent', padding: 10 }}>
              <Text style={{color:'white'}}>Id: {item.id}</Text>
              <Text style={{color:'white'}}>Title: {item.title}</Text>
              <Text style={{color:'white'}}>Description: {item.description}</Text>
              <Text style={{color:'white'}}>Ratings: {item.rating}</Text>
              <Text style={{color:'white'}}>First Answer: {item.first_answer}</Text>
              <Text style={{color:'white'}}>Second Answer: {item.second_answer}</Text>
              <Text style={{color:'white'}}>Type: {item.type}</Text>
              <Text style={{color:'white'}}>Fourth Answer: {item.fifth_answer}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
