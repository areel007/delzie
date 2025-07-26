import { TypeAnimation } from "react-type-animation"


export const TypeWriter = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                '', // Types 'One'
                1000, // Waits 1s
                'ace designs', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                () => {
                    console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '20px', display: 'inline-block', fontWeight: 'bold', }}
        />
    );
};