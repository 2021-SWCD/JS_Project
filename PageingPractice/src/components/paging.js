import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import {View, Image} from 'react-native';
import sizingStyle from '../../css/avatars/sizingStyle';

/**
 * 페이징 컴포넌트
 * @author 주민지
 */

const sizes = {
    megaSmall : sizingStyle.sizing_megaSmall,
    midSmall : sizingStyle.sizing_midSmall,
    small : sizingStyle.sizing_small,
    smallMid : sizingStyle.sizing_smallMid,
    midium : sizingStyle.sizing_midium,
    big : sizingStyle.sizing_big,
};
var state = { //defaultProps 같은거?
    'querySet': tableData,
    'page': 1,
    'rows': 5,
    'window': 5,
}

buildTable()

export default function Paging({photo, size, customWidth, customHeight}) {
    console.log(sizes[size])
    return(
        <View style={sizingStyle.sizing_container}>
            <ImageBackground
                source={photo}
                style={[sizes[size], !!customWidth && {width : customWidth}, !!customHeight && {height : customHeight}]}
                imageStyle={{borderRadius: 100}}
            />
        </View>
    )
}

Sizing.defaultProps = {
    photo: {uri : 'https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg'},
}