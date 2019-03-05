import React from "react";
import { View, FlatList } from "react-native";
import { GridContainer } from "./GridContainer";

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsInTheLastRow =
    data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsInTheLastRow !== numColumns &&
    numberOfElementsInTheLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsInTheLastRow}`, empty: true });
    numberOfElementsInTheLastRow++;
  }

  return data;
};

const GridMenu = ({ items, numColumns }) => {
  renderItem = ({ item }) => {
    return <GridContainer item={item} numColumns={numColumns} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={formatData(items, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 2
  }
};

export { GridMenu };
