import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
} from '../patterns-library';

const BasicExample = () => (
  <PLWrapper>
    <PLHeading text="Basic example" />
    <PLExample>
      <div className="panel">
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="panel">
          <div className="panel__body">...</div>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const PanelWithHeading = () => (
  <PLWrapper>
    <PLHeading text="Panel with heading" />
    <PLExample>
      <div className="panel">
        <div className="panel__heading">
          <h3 className="panel__title">Panel title</h3>
        </div>
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="panel">
          <div className="panel__heading">
            <h3 className="panel__title">Panel title</h3>
          </div>
          <div className="panel__body">...</div>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const PanelWithFooter = () => (
  <PLWrapper>
    <PLHeading text="Panel with footer" />
    <PLExample>
      <div className="panel">
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
        <div className="panel__footer">Panel footer</div>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="panel">
          <div className="panel__body">...</div>
          <div className="panel__footer">Panel footer</div>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const ContextualAlternatives = () => (
  <PLWrapper>
    <PLHeading text="Contextual alternatives" />
    <PLExample>
      <div className="panel panel_primary mbmd">
        <div className="panel__heading">
          <h3 className="panel__title">Panel title</h3>
        </div>
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>

      <div className="panel panel_success mbmd">
        <div className="panel__heading">
          <h3 className="panel__title">Panel title</h3>
        </div>
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>

      <div className="panel panel_info mbmd">
        <div className="panel__heading">
          <h3 className="panel__title">Panel title</h3>
        </div>
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>

      <div className="panel panel_warning mbmd">
        <div className="panel__heading">
          <h3 className="panel__title">Panel title</h3>
        </div>
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>

      <div className="panel panel_danger">
        <div className="panel__heading">
          <h3 className="panel__title">Panel title</h3>
        </div>
        <div className="panel__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora.</div>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="panel panel_primary|panel_success|panel_info|panel_warning|panel_danger">
          ...
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

export const Panel = () => (
  <div>
    <PLSectionHeading text="Panel" />
    <BasicExample />
    <PanelWithHeading />
    <PanelWithFooter />
    <ContextualAlternatives />
  </div>
);
