import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from './subscribe.scss';

const url = 'https://wonderkiln.us12.list-manage.com/subscribe/post?u=45b5c2055f100d913f074055b&amp;id=ec9df2ad9a';

class Subscribe extends React.Component {
  render () {
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div className={styles.subscribe}>
            <h2 className="heading--small">Stay Up To Date</h2>
            <p className={styles.paragraph}>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. </p>
            <form className={styles.form} onSubmit={(event, data) => {
              event.preventDefault()
              console.log(this.email.value);
              subscribe({ email: this.email.value });
            }}>
              <div className={styles.inputWrapper}>
                <input ref={node => (this.email = node)} name="email" className={styles.input} type="email" required />
                <button className={styles.submit} type="submit">
                  {status === 'sending' ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              {(status == 'error' || status == 'success') && <p className={styles.message}>{message}</p>}
            </form>
          </div>
        )}
      />
    );
  }
};

export default Subscribe;
