import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { OHLCChartWithElderRayIndicator } from 'lib/charts/OHLCChartWithElderRayIndicator';

class ElderRayIndicatorPage extends React.Component {
  render() {
    return (
      <ContentSection title={ElderRayIndicatorPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/ELDER-RAY-INDICATOR'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <OHLCChartWithElderRayIndicator
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

ElderRayIndicatorPage.title = 'ElderRay';

export { ElderRayIndicatorPage };
