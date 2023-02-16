import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../constants/colors';

const SvgComponent = props => (
    <Svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M7.1499 18.0859C6.8999 17.8716 6.7749 17.6179 6.7749 17.3248C6.7749 17.0322 6.8999 16.7788 7.1499 16.5645L14.4749 10.2859L7.1249 3.98592C6.89157 3.78592 6.7749 3.53592 6.7749 3.23592C6.7749 2.93592 6.8999 2.67878 7.1499 2.46449C7.3999 2.25021 7.6959 2.14307 8.0379 2.14307C8.37924 2.14307 8.6749 2.25021 8.9249 2.46449L17.3249 9.68592C17.4249 9.77164 17.4959 9.8645 17.5379 9.9645C17.5792 10.0645 17.5999 10.1716 17.5999 10.2859C17.5999 10.4002 17.5792 10.5074 17.5379 10.6074C17.4959 10.7074 17.4249 10.8002 17.3249 10.8859L8.8999 18.1074C8.66657 18.3074 8.37924 18.4074 8.0379 18.4074C7.6959 18.4074 7.3999 18.3002 7.1499 18.0859Z"
            fill={props.color}
        />
    </Svg>
);

export default SvgComponent;