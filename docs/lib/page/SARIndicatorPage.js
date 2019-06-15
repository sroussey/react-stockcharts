import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithSAR } from 'lib/charts/CandleStickChartWithSAR';

class ForceIndexIndicatorPage extends React.Component {
  render() {
    return (
      <ContentSection title={ForceIndexIndicatorPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChartWithSAR
                  data={this.props.someData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/SAR-INDICATOR'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

ForceIndexIndicatorPage.title = 'SAR';

export { ForceIndexIndicatorPage };
