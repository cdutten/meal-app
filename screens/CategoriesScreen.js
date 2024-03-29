import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return (
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    );
};

const CategoriesScreen = props => {
    return (
        <FlatList data={CATEGORIES}
                  renderItem={renderGridItem}
                  keyExtractor={(itemData) => itemData.id}
                  numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
    }
});

export default CategoriesScreen;

