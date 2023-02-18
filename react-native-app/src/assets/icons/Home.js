import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const SvgComponent = props => (
    <Svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_253_1069)">
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6373 3.58407C17.1692 3.21992 16.593 3.02222 16 3.02222C15.4069 3.02222 14.8308 3.21992 14.3626 3.58407L3.18398 12.2774C2.18131 13.0601 2.73331 14.6667 4.00398 14.6667H5.45998L6.55331 25.5987C6.61911 26.2567 6.92705 26.8668 7.41735 27.3106C7.90766 27.7543 8.54535 28 9.20664 28.0001H22.7933C23.4546 28 24.0923 27.7543 24.5826 27.3106C25.0729 26.8668 25.3808 26.2567 25.4466 25.5987L26.54 14.6667H27.996C29.2653 14.6667 29.82 13.0601 28.816 12.2787L17.6373 3.5854V3.58407ZM7.99464 13.2134C7.9769 13.0363 7.92415 12.8645 7.83947 12.7079C7.75478 12.5514 7.63983 12.4132 7.50131 12.3014L16 5.6894L24.4986 12.3001C24.3601 12.4118 24.2452 12.55 24.1605 12.7066C24.0758 12.8631 24.0231 13.035 24.0053 13.2121L22.7933 25.3334H9.20664L7.99464 13.2134ZM14 17.3334C14 16.803 14.2107 16.2943 14.5858 15.9192C14.9608 15.5441 15.4695 15.3334 16 15.3334C16.5304 15.3334 17.0391 15.5441 17.4142 15.9192C17.7893 16.2943 18 16.803 18 17.3334C18 17.8638 17.7893 18.3725 17.4142 18.7476C17.0391 19.1227 16.5304 19.3334 16 19.3334C15.4695 19.3334 14.9608 19.1227 14.5858 18.7476C14.2107 18.3725 14 17.8638 14 17.3334ZM16 12.6667C14.7623 12.6667 13.5753 13.1584 12.7001 14.0336C11.825 14.9087 11.3333 16.0957 11.3333 17.3334C11.3333 18.5711 11.825 19.7581 12.7001 20.6332C13.5753 21.5084 14.7623 22.0001 16 22.0001C17.2377 22.0001 18.4246 21.5084 19.2998 20.6332C20.175 19.7581 20.6666 18.5711 20.6666 17.3334C20.6666 16.0957 20.175 14.9087 19.2998 14.0336C18.4246 13.1584 17.2377 12.6667 16 12.6667Z"
                fill={props.color}
            />
        </G>
        <Defs>
            <ClipPath id="clip0_253_1069">
                <Rect width="32" height="32" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default SvgComponent;