import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { OHLCChartWithElderImpulseIndicator } from 'lib/charts/OHLCChartWithElderImpulseIndicator';

class ElderImpulseIndicatorPage extends React.Component {
  render() {
    return (
      <ContentSection title={ElderImpulseIndicatorPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/ELDER-IMPULSE-INDICATOR'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <OHLCChartWithElderImpulseIndicator
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

ElderImpulseIndicatorPage.title = 'Elder Impulse';

export { ElderImpulseIndicatorPage };
