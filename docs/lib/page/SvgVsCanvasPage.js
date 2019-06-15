import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithZoomPan } from 'lib/charts/CandleStickChartWithZoomPan';

class SvgVsCanvasPage extends React.Component {
  render() {
    return (
      <ContentSection title={SvgVsCanvasPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/SVG-VS-CANVAS'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser type='svg'>
              {(type) => (
                <CandleStickChartWithZoomPan
                  data={this.props.someData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

SvgVsCanvasPage.title = 'Svg vs Canvas';

export { SvgVsCanvasPage };
