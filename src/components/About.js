import React from 'react';
import { Header, Text, Container, Divider } from 'semantic-ui-react';

class About extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Header textAlign="center" >About</Header>
                    <Divider hidden />
                    <p style={styles.texts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat, nibh et pellentesque vehicula, eros ipsum vulputate metus, quis posuere magna lorem et augue. Suspendisse at faucibus ligula. Nam quis mattis erat, at ultricies arcu. Nulla venenatis gravida eros vel interdum. Praesent mattis felis aliquam tincidunt dapibus. Fusce porta auctor elit a tempor. Quisque sollicitudin eros ac ante egestas accumsan id ut ex. Vivamus fermentum volutpat justo, at rutrum felis luctus ut.</p>
                    <p style={styles.texts}>Quisque quis nibh vel tellus tristique imperdiet. Proin efficitur augue id lobortis laoreet. Duis viverra id ex in congue. Cras dolor quam, sollicitudin eget congue eget, porttitor at lacus. Donec elementum porttitor orci vitae dignissim. Nunc eget metus vel arcu placerat ornare eget nec orci. Curabitur id fermentum erat.</p>
                    <p style={styles.texts}>Phasellus tincidunt sem in ligula gravida, quis lobortis arcu accumsan. In eu rhoncus tortor. Sed orci est, blandit nec convallis sed, tempus quis est. Integer et bibendum lorem. Sed a viverra metus, sodales elementum mauris. Cras cursus eleifend ornare. Morbi viverra enim sed orci congue dignissim. Vestibulum vitae mauris ac augue accumsan facilisis. Mauris gravida lacus non dictum aliquam. Praesent dignissim nisl eget eleifend suscipit. Praesent vehicula augue lacus, at congue diam tempus in.</p>
                    <p style={styles.texts}>Praesent bibendum lectus eu sollicitudin mollis. Sed sit amet pellentesque ligula, in feugiat metus. Aliquam sit amet eros nisl. Sed eget elit nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean nec sollicitudin elit. Ut rutrum ipsum congue, sodales erat sed, pharetra mauris. Nullam consequat nec ex et tempor. Fusce sit amet odio a neque finibus viverra.</p>
                    <p style={styles.texts}>Sed pretium aliquam enim, tempus ultrices neque euismod eu. Cras ac luctus tortor, non pretium est. Aliquam sollicitudin bibendum libero, id egestas urna vulputate sit amet. Sed justo nunc, accumsan congue feugiat eu, posuere quis tellus. Aliquam non nulla nec lectus pulvinar pellentesque. Vestibulum pharetra aliquam egestas. Donec nisl tellus, dapibus id rhoncus sit amet, aliquet in nibh. In ultrices pretium sapien at ullamcorper.</p>
                </Container>
            </div>
        )
    }
}

const styles = {
    texts: {
        textWrap: 'auto',
    }
}

export default About;