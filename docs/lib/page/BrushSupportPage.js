import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithBrush } from 'lib/charts/CandleStickChartWithBrush';

class BrushSupportPage extends React.Component {
  render() {
    return (
      <ContentSection title={BrushSupportPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/BRUSH-INTERACTIVE-INDICATOR'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChartWithBrush
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

BrushSupportPage.title = 'Brush';

export { BrushSupportPage };
