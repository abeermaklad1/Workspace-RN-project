import React from "react";
import { Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function History() {
  let tableHead = ["ID", "Name", "Check In", "Check Out"];
  let tableData = [
    ["?", "?", "?", "?"],
    ["?", "?", "?", "?"],
    ["?", "?", "?", "?"],
    ["?", "?", "?", "?"],
  ];
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        paddingTop: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "700",
          paddingBottom: 40,
        }}
      >
        Today
      </Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={tableHead}
          style={{ height: 50, backgroundColor: "#f1f8ff" }}
          textStyle={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}
        />
        <Rows data={tableData} textStyle={{ textAlign: "center", margin: 6 }} />
      </Table>
    </View>
  );
}
