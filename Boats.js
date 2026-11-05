
import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Boat = ({ name, description, icon_name, icon_color, picture }) => {
    return (
        <View>
            <Image
                source={picture}
                style={{ width: 400, height: 250 }}
            />

            <Text>
                <FontAwesome6
                    name={icon_name}
                    size={40}
                    color={icon_color}
                />
                {' '}
                {name}
            </Text>

            <Text>
                {description}
            </Text>
        </View>
    );
};

export default Boat;
