import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { VolumeProfileChart } from 'lib/charts/VolumeProfileChart';

class VolumeProfilePage extends React.Component {
  render() {
    return (
      <ContentSection title={VolumeProfilePage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <VolumeProfileChart data={this.props.lotsOfData} type={type} />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/VOLUME-PROFILE'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

VolumeProfilePage.title = 'Volume profile';

export { VolumeProfilePage };
