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
    <PLHeading text="Basic Example" />
    <PLExample>
      <form className="f">
        <div className="mbmd">
          <label htmlFor="email">Email address</label>
          <input type="email" placeholder="Email" className="f__control" id="email" />
          <span className="f__help-text">Only accept @gmail.com</span>
        </div>
        <div className="mbmd">
          <label htmlFor="pass">Password</label>
          <input type="password" placeholder="Password" className="f__control" id="pass" />
          <span className="f__help-text">Must between 6 - 20 characters</span>
        </div>
        <div className="mbmd">
          <label htmlFor="exampleInputFile">File input</label>
          <input type="file" className="mbxs"/>
          <p className="txt-muted">Example block-level help text here.</p>
        </div>
        <div className="f__checkbox">
          <label>
            <input type="checkbox"/> Check me out
          </label>
        </div>
        <button type="submit" className="btn mbmd">Submit</button>
      </form>
    </PLExample>
    <PLCodeBlock>
      {`
        <form className="f">
          <div className="mbmd">
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="Email" className="f__control" id="email" />
            <span className="f__help-text">Only accept @gmail.com</span>
          </div>
          <div className="mbmd">
            <label htmlFor="pass">Password</label>
            <input type="password" placeholder="Password" className="f__control" id="pass" />
            <span className="f__help-text">Must between 6 - 20 characters</span>
          </div>
          <div className="mbmd">
            <label htmlFor="exampleInputFile">File input</label>
            <input type="file" className="mbxs"/>
            <p className="txt-muted">Example block-level help text here.</p>
          </div>
          <div className="f__checkbox">
            <label>
              <input type="checkbox"/> Check me out
            </label>
          </div>
          <button type="submit" className="btn mbmd">Submit</button>
        </form>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Inputs = () => (
  <PLWrapper>
    <PLHeading text="Inputs" />
    <PLExample>
      <input type="email" placeholder="Input control" className="f__control" />
    </PLExample>
    <PLCodeBlock>
      {`
        <input className="f__control" />
      `.trim().replace(/>\s+/, '')}
    </PLCodeBlock>
  </PLWrapper>
);

const InputLarge = () => (
  <PLWrapper>
    <PLHeading text="Input large" />
    <PLExample>
      <input type="email" placeholder="Input control" className="f__control f__control_large" />
    </PLExample>
    <PLCodeBlock>
      {`
        <input className="f__control f__control_large" />
      `.trim().replace(/>\s+/, '')}
    </PLCodeBlock>
  </PLWrapper>
);

const Textarea = () => (
  <PLWrapper>
    <PLHeading text="Textarea" />
    <PLExample>
      <textarea rows="3" className="f__control f__control_rh"></textarea>
    </PLExample>
    <PLCodeBlock>
      {`
        <textarea className="f__control f__control_rh" rows="3"></textarea>
      `.trim().replace(/>\s+/, '')}
    </PLCodeBlock>
  </PLWrapper>
);

const FormInline = () => (
  <PLWrapper>
    <PLHeading text="Form inline" />
    <PLExample>
      <input type="email" placeholder="Email" className="f__control f__control_inline" id="email" />
      <button className="btn btn_primary">Register</button>
    </PLExample>
    <PLCodeBlock>
      {`
        <input type="email" placeholder="Email" className="f__control f__control_inline" id="email" />
        <button className="btn btn_primary">Register</button>
      `}
    </PLCodeBlock>
  </PLWrapper>
)

const Checkboxes = () => (
  <PLWrapper>
    <PLHeading text="Checkboxes (default stacked)" />
    <PLExample>
      <div className="f__checkbox">
        <label>
          <input type="checkbox"/>Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div className="f__checkbox disabled">
        <label>
          <input type="checkbox" disabled="disabled"/>Option two is disabled
        </label>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="f__checkbox">
          <label>
            <input type="checkbox"/>Option one ...
          </label>
        </div>

        <div className="f__checkbox disabled">
          <label>
            <input type="checkbox" disabled="disabled"/>Option two is disabled
          </label>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const CheckboxesInline = () => (
  <PLWrapper>
    <PLHeading text="Checkboxes (Inline)" />
    <PLExample>
      <div className="f__checkbox f__checkbox_inline">
        <label>
          <input type="checkbox"/>1
        </label>
      </div>
      <div className="f__checkbox f__checkbox_inline">
        <label>
          <input type="checkbox"/>2
        </label>
      </div>
      <div className="f__checkbox f__checkbox_inline">
        <label>
          <input type="checkbox"/>3
        </label>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="f__checkbox f__checkbox_inline">
          <label>
            <input type="checkbox"/>1
          </label>
        </div>
        <div className="f__checkbox f__checkbox_inline">
          <label>
            <input type="checkbox"/>2
          </label>
        </div>
        <div className="f__checkbox f__checkbox_inline">
          <label>
            <input type="checkbox"/>3
          </label>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Radios = () => (
  <PLWrapper>
    <PLHeading text="Radios (default stacked)" />
    <PLExample>
      <div className="f__radio">
        <label>
          <input type="radio" name="radio"/>Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div className="f__radio">
        <label>
          <input type="radio" name="radio"/>Option two can be something else and selecting it will deselect option one
        </label>
      </div>
      <div className="f__radio disabled">
        <label>
          <input type="radio" name="radio" disabled="disabled"/>Option three is disabled
        </label>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="f__radio">
          <label>
            <input type="radio" name="radio"/>Option one ...
          </label>
        </div>
        <div className="f__radio">
          <label>
            <input type="radio" name="radio"/>Option two ...
          </label>
        </div>
        <div className="f__radio disabled">
          <label>
            <input type="radio" name="radio" disabled="disabled"/>Option three is disabled
          </label>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const RadiosInline = () => (
  <PLWrapper>
    <PLHeading text="Radios (Inline)" />
    <PLExample>
      <div className="f__radio f__radio_inline">
        <label>
          <input type="radio" name="radio2"/>1
        </label>
      </div>
      <div className="f__radio f__radio_inline">
        <label>
          <input type="radio" name="radio2"/>2
        </label>
      </div>
      <div className="f__radio f__radio_inline">
        <label>
          <input type="radio" name="radio2"/>3
        </label>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="f__radio f__radio_inline">
          <label>
            <input type="radio" name="radio2"/>1
          </label>
        </div>
        <div className="f__radio f__radio_inline">
          <label>
            <input type="radio" name="radio2"/>2
          </label>
        </div>
        <div className="f__radio f__radio_inline">
          <label>
            <input type="radio" name="radio2"/>3
          </label>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const Select = () => (
  <PLWrapper>
    <PLHeading text="Select" />
    <PLExample>
      <select className="f__control mbmd">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <h4>Select multiple</h4>
      <select multiple="multiple" className="f__control f__control_rh">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </PLExample>
    <PLCodeBlock>
      {`
        <select className="f__control mbmd">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select multiple="multiple" className="f__control f__control_rh">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const DisableState = () => (
  <PLWrapper>
    <PLHeading text="Disable State" />
    <PLExample>
      <label>Disabled input</label>
      <input type="text" placeholder="Disabled input" disabled="disabled" className="f__control mbmd"/>
      <label>Disabled Select</label>
      <select disabled="disabled" className="f__control">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
      </select>
    </PLExample>
    <PLCodeBlock>
      {`
        <input className="f__control" disabled />

        <select className="f__control" disabled>...</select>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

const ValidationState = () => (
  <PLWrapper>
    <PLHeading text="Validation State" />
    <PLExample>
      ???
    </PLExample>
    <PLCodeBlock>
      {`???`}
    </PLCodeBlock>
  </PLWrapper>
);

const InputGroup = () => (
  <PLWrapper>
    <PLHeading text="Input Group" />
    <PLExample>
      <div className="f__input-group mbmd">
        <span className="f__input-addon br-r-tr-br">@</span>
        <input className="f__control f__control_ig br-r-tl-bl" type="text" placeholder="Username" />
      </div>
      <div className="f__input-group mbmd">
        <input type="text" placeholder="Recipient's username" className="f__control f__control_ig br-r-tr-br"/>
        <span className="f__input-addon br-r-tl-bl">@example.com</span>
      </div>
      <div className="lf mbmd">
        <input type="text" placeholder="Recipient's username" className="f__control lf_full-space br-r-tr-br"/>
        <button className="btn btn_primary br-r-tl-bl">@example.com</button>
      </div>
      <div className="f__input-group mbmd">
        <span className="f__input-addon br-r-tr-br">$</span>
        <input type="text" className="f__control f__control_ig br-reset"/>
        <span className="f__input-addon br-r-tl-bl">.00</span>
      </div>
      <label htmlFor="basic-url">Your vanity URL</label>
      <div className="f__input-group">
        <span className="f__input-addon br-r-tr-br">https://example.com/users/</span>
        <input type="text" className="f__control br-r-tl-bl"/>
      </div>
    </PLExample>
    <PLCodeBlock>
      {`
        <div className="f__input-group">
          <span className="f__input-addon br-r-tr-br">@</span>
          <input className="f__control f__control_ig br-r-tl-bl" />
        </div>

        <div className="f__input-group">
          <input className="f__control f__control_ig br-r-tr-br"/>
          <span className="f__input-addon br-r-tl-bl">@example.com</span>
        </div>

        <div className="lf mbmd">
          <input className="f__control lf_full-space br-r-tr-br"/>
          <button className="btn btn_primary br-r-tl-bl">@example.com</button>
        </div>

        <div className="f__input-group mbmd">
          <span className="f__input-addon br-r-tr-br">$</span>
          <input className="f__control f__control_ig br-reset"/>
          <span className="f__input-addon br-r-tl-bl">.00</span>
        </div>

        <label for="basic-url">Your vanity URL</label>
        <div className="f__input-group">
          <span className="f__input-addon br-r-tr-br">https://example.com/users/</span>
          <input type="text" className="f__control br-r-tl-bl"/>
        </div>
      `}
    </PLCodeBlock>
  </PLWrapper>
);

export const Form = () => (
  <div>
    <PLSectionHeading text="Form" />
    <BasicExample />
    <Inputs />
    <InputLarge />
    <Textarea />
    <FormInline />
    <Checkboxes />
    <CheckboxesInline />
    <Radios />
    <RadiosInline />
    <Select />
    <DisableState />
    <ValidationState />
    <InputGroup />
  </div>
);
