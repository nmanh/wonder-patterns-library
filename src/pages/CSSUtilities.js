import React from 'react';
import {
  PLWrapper,
  PLSectionHeading,
  PLHeading,
  PLCodeBlock,
  PLExample,
  PLDescription,
} from '../components/patterns-library';

const Border = () => (
  <PLWrapper>
    <PLHeading text="Border" />
    <PLExample>
      <div className="mbmd">
        <div>Remove border radius top-left & bottom-left</div>
        <button className="btn br-r-tl-bl">Remove border</button>
      </div>
      <div className="mbmd">
        <div>Remove border radius top-right & bottom-right</div>
        <button className="btn br-r-tr-br">Remove border</button>
      </div>
      <div className="mbmd">
        <div>Remove all border radius</div>
        <button className="btn br-reset">Remove border</button>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <button className="btn br-r-tl-bl">Remove border</button>
        <button className="btn br-r-tr-br">Remove border</button>
        <button className="btn br-reset">Remove border</button>
      `}
    </PLCodeBlock>
  </PLWrapper>
)

const Image = () => (
  <PLWrapper>
    <PLHeading text="Image" />
    <PLExample>
      <div className="row">
        <div className="mbmd small-6 columns">
          <div>Image circle</div>
          <img src="https://unsplash.it/100" className="img-circle" alt="presentation" />
        </div>
        <div className="mbmd small-6 columns">
          <div>Image rounded</div>
          <img src="https://unsplash.it/100" className="img-rounded" alt="presentation" />
        </div>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <img className="img-circle" />
        <img className="img-rounded" />
      `}
    </PLCodeBlock>
  </PLWrapper>
)

const Layout = () => {
  const blockAStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#00ffff',
  }
  const blockBStyle = {
    width: '400px',
    height: '120px',
    backgroundColor: '#ff00ff',
  }
  const blockCStyle = {
    width: '100px',
    height: '200px',
    backgroundColor: '#ffff00',
  }
  const Block = (props) => (
    <div {...props}>
      <div style={blockAStyle} />
      <div style={blockBStyle} />
      <div style={blockCStyle} />
    </div>
  )

  return (
    <PLWrapper>
      <PLHeading text="Layout" />
      <PLExample>
        <div className="mbmd">
          <div>Flex layout (normal)</div>
            <Block className="lf" />
        </div>
        <div className="mbmd">
          <div>Flex layout (vertical center)</div>
          <Block className="lf lf_align-middle" />
        </div>
        <div className="mbmd">
          <div>Flex layout - set item full space</div>
          <div className="lf">
            <div style={blockAStyle} />
            <div style={blockBStyle} className="lf_full-space" />
            <div style={blockCStyle} />
          </div>
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <!-- Normal -->
          <div className="lf">...</div>

          <!-- Vertical align -->
          <div className="lf lf_align-middle">...</div>

          <!-- Set item full space -->
          <div className="lf">
            <div />
            <div className="lf_full-space" />
            <div />
          </div>
        `}
      </PLCodeBlock>
    </PLWrapper>
  )
}

const List = () => {
  const Ul = (props) => (
    <ul {...props}>
      <li>Cup of tea £1.50</li>
      <li>Pot of tea for two £2.50</li>
      <li>Filter coffee £1.60</li>
      <li>Americano £2.00</li>
      <li>Cappuccino £2.50</li>
    </ul>
  )

  return (
    <PLWrapper>
      <PLHeading text="List" />
      <PLExample>
        <div className="mbmd">
          <strong>List unstyled</strong>
          <Ul className="list-unstyled" />
        </div>
        <div className="mbmd">
          <strong>List underline</strong>
          <Ul className="list-underline" />
        </div>
        <div className="mbmd">
          <strong>List inline</strong>
          <Ul className="list-inline" />
        </div>
      </PLExample>
      <PLCodeBlock>
        {`
          <!-- Unstyled -->
          <ul className="list-unstyled">...</ul>

          <!-- Underline -->
          <ul className="list-underline">...</ul>

          <!-- Inline -->
          <ul className="list-inline">...</ul>
        `}
        </PLCodeBlock>
      </PLWrapper>
    )
}

const Space = () => (
  <PLWrapper>
    <PLHeading text="Space" />
    <PLDescription>
      Based on <a href="https://spec.fm/specifics/8-pt-grid">8 point grid</a>
      <ul>
        <li>extra small - 4px</li>
        <li>small - 8px</li>
        <li>medium - 16px</li>
        <li>large - 24px</li>
        <li>extra large - 32px</li>
        <li>xxlarge - 56px</li>
      </ul>
      <p>Avaiable properties: <strong>margin-[top|right|bottom|left], padding</strong></p>
    </PLDescription>
    <PLExample>
      <div className="mbmd">
        Margin bottom extra small
        <div style={{ height: '4px', backgroundColor: '#00ffff'}} />
        Margin bottom small
        <div style={{ height: '8px', backgroundColor: '#00ffff'}} />
        Margin bottom medium
        <div style={{ height: '16px', backgroundColor: '#00ffff'}} />
        Margin bottom large
        <div style={{ height: '24px', backgroundColor: '#00ffff'}} />
        Margin bottom extra large
        <div style={{ height: '32px', backgroundColor: '#00ffff'}} />
        Margin bottom xxlarge
        <div style={{ height: '56px', backgroundColor: '#00ffff'}} />
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <!-- margin bottom extra small -->
        <div className="mbxs">...</div>

        <!-- margin bottom small -->
        <div className="mbsm">...</div>

        <!-- margin bottom medium -->
        <div className="mbmd">...</div>

        <!-- margin bottom large -->
        <div className="mblg">...</div>

        <!-- margin bottom extra large -->
        <div className="mbxlg">...</div>

        <!-- margin bottom xx large -->
        <div className="mbxxlg">...</div>
      `}
      </PLCodeBlock>
    </PLWrapper>
)

const Text = () => (
  <PLWrapper>
    <PLHeading text="Text" />
    <PLExample>
      <p className="txt-large">Text large</p>
      <p className="txt-small">Text small</p>
      <p className="txt-muted">Text muted</p>
      <p className="txt-bold">Text bold</p>
      <p className="txt-left">Text align left (default behavior)</p>
      <p className="txt-center">Text align center</p>
      <p className="txt-right">Text align right</p>
      <p>
        <span className="txt-white" style={{backgroundColor: '#111', padding: '4px'}}>Text color white</span>
        <span className="txt-primary-color">Text primary color</span>
        <span className="txt-body-color">Text body color</span>
        <span className="txt-uppercase">Text uppercase</span>
      </p>
    </PLExample>
    <PLCodeBlock>
      {`
        <p className="txt-large|txt-small|txt-muted|txt-bold|txt-left|txt-right|txt-center|txt-white|txt-primary-color|txt-body-color|txt-uppercase">...</p>
      `}
      </PLCodeBlock>
    </PLWrapper>
)

const Visibility = () => (
  <PLWrapper>
    <PLHeading text="Visibility" />
    <PLExample>
      <p className="show-for-sr">This text can only be read by a screen reader.</p>
      <p>There's a line of text above this one, you just can't see it.</p>
    </PLExample>
    <PLCodeBlock>
      {`
        <p className="show-for-sr">This text can only be read by a screen reader.</p>
        <p>There's a line of text above this one, you just can't see it.</p>
      `}
      </PLCodeBlock>
    </PLWrapper>
)

const CSSUtilities = () => (
  <div>
    <PLSectionHeading title="CSS Utilities" />
    <Border />
    <Image />
    <Layout />
    <List />
    <Space />
    <Text />
    <Visibility />
  </div>
)

export default CSSUtilities;
