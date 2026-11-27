import type { ReactNode } from 'react';
import { site, fees } from './content';

const Mail = () => <a href={`mailto:${site.email}`}>{site.email}</a>;
const Tel = () => <a href={`tel:+91${site.contactPhone}`}>+91 {site.contactPhone}</a>;
const Org = () => <strong>{site.legalName}</strong>;

const FeeTable = () => (
  <table>
    <thead><tr><th>Delegate category</th><th>Registration fee (INR)</th></tr></thead>
    <tbody>{fees.map((f) => <tr key={f.label}><td>{f.label}</td><td>₹{f.amount.toLocaleString('en-IN')}</td></tr>)}</tbody>
  </table>
);

const Grievance = () => (
  <ul>
    <li><strong>Grievance Officer:</strong> {site.grievanceName}, {site.grievanceRole}</li>
    <li><strong>E-mail:</strong> <a href={`mailto:${site.grievanceEmail}`}>{site.grievanceEmail}</a> (general: <Mail />)</li>
    <li><strong>Address:</strong> {site.legalAddress}</li>
    <li><strong>Help line:</strong> {site.contactName}, {site.contactRole} — <Tel /> (call / WhatsApp)</li>
  </ul>
);

export const pages: Record<string, { title: string; intro: string; body: ReactNode }> = {
  'about-us': {
    title: 'About Us',
    intro: 'Who we are and what the Reunion is about.',
    body: (
      <>
        <h2>The Reunion</h2>
        <p>
          The Reunion of Past &amp; Present Students of Bengal Veterinary College (Calcutta University) and the Faculty of Veterinary &amp; Animal
          Sciences of Bidhan Chandra Krishi Viswavidyalaya (BCKV) and West Bengal University of Animal &amp; Fishery Sciences (WBUAFS) is held
          every year at the historic Belgachia campus in Kolkata. It brings together veterinarians of every generation — students, teachers,
          serving and retired professionals — to meet, remember and share knowledge.
        </p>
        <h2>The 54th Reunion</h2>
        <p>The 54th Reunion is a one-day programme on <strong>{site.dateLong}</strong> at the <strong>{site.venueName}</strong>, {site.address}.</p>
        <h2>Who runs this website</h2>
        <p>
          This website, <strong>bengalvets.org</strong>, is run by <Org />, the body that organises the Reunion through its Organizing Committee.
          Registration fees and sponsorship money are received only in the bank account of <Org />.
        </p>
        <h2>What we offer on this website</h2>
        <ul>
          <li>Information about the Reunion, its programme, venue and committees.</li>
          <li>Online registration of delegates and payment of the registration fee (shown below).</li>
          <li>Information for sponsors and advertisers.</li>
        </ul>
        <FeeTable />
        <h2>Contact</h2>
        <p>{site.legalAddress} · <Mail /> · <Tel /></p>
      </>
    ),
  },

  'contact-us': {
    title: 'Contact Us',
    intro: 'We are happy to help with registration, payments, sponsorship and any other question.',
    body: (
      <>
        <h2>Organiser</h2>
        <p><Org /><br />{site.legalAddress}</p>
        <h2>Registration &amp; general help</h2>
        <ul>
          <li><strong>{site.contactName}</strong>, {site.contactRole}</li>
          <li>Phone / WhatsApp: <Tel /></li>
          <li>E-mail: <Mail /></li>
        </ul>
        <h2>Payment problems, refunds and complaints</h2>
        <Grievance />
        <p>Please write your full name, mobile number and payment reference (transaction ID) in every payment-related message. We aim to reply within 2 working days and to resolve the matter within 7 working days.</p>
        <h2>Venue</h2>
        <p>{site.venueName}<br />{site.address}<br /><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
      </>
    ),
  },

  'terms-and-conditions': {
    title: 'Terms & Conditions',
    intro: 'Please read these terms before you register or pay on this website.',
    body: (
      <>
        <h2>1. About these terms</h2>
        <p>
          These terms apply to your use of <strong>bengalvets.org</strong> (the “Website”) and to registration for the 54th Reunion (the “Event”).
          The Website and the Event are run by <Org />, {site.legalAddress} (“we”, “us”). By using the Website or registering, you agree to these terms.
        </p>
        <h2>2. Who may register</h2>
        <p>Past and present students of Bengal Veterinary College (C.U.) and of the Faculty of Veterinary &amp; Animal Sciences of BCKV and WBUAFS, in the categories shown below. You must give true and complete information. A delegate under 18 years of age should register with the consent of a parent or guardian.</p>
        <h2>3. Fees</h2>
        <FeeTable />
        <p>Fees are in Indian Rupees (INR) and are charged per delegate for the category chosen. We may ask for proof of category (for example, a student or retirement identity) at the venue.</p>
        <h2>4. Registration and payment</h2>
        <ul>
          <li>Your registration is confirmed only after we receive the full fee. You will get a confirmation / receipt by e-mail.</li>
          <li>Online payments are processed by an RBI-authorised payment aggregator through its secure page. We never see or store your card, net-banking or UPI PIN details.</li>
          <li>Please keep your payment reference (transaction ID) until the Event is over.</li>
        </ul>
        <h2>5. Refunds</h2>
        <p>Refunds are given only as stated in our <a href="/refund-and-cancellation-policy">Refund &amp; Cancellation Policy</a>.</p>
        <h2>6. At the Event</h2>
        <ul>
          <li>Please carry your confirmation and a photo identity card for entry.</li>
          <li>Please follow the instructions of the Organizing Committee and the rules of the university campus.</li>
          <li>Photographs and videos are taken at the Event. They may be used on this Website, in the souvenir and on our social-media pages. If you do not want to appear, please tell the registration desk.</li>
        </ul>
        <h2>7. Changes</h2>
        <p>We may change the programme, timings or arrangements of the Event when needed. Important changes will be shown on this Website and sent to registered delegates by e-mail or WhatsApp.</p>
        <h2>8. Website content</h2>
        <p>The text, design and photographs on this Website are for the information of members. The logos of Bengal Veterinary College, BCKV and WBUAFS belong to those institutions and are shown only to identify the Reunion. Please do not copy material from this Website for commercial use.</p>
        <h2>9. Limitation of liability</h2>
        <p>We take reasonable care in running the Website and the Event. To the extent allowed by law, we are not liable for indirect loss, or for loss caused by events beyond our reasonable control (such as natural calamity, government order or failure of third-party services). Our total liability to a delegate shall not exceed the registration fee paid by that delegate.</p>
        <h2>10. Governing law</h2>
        <p>These terms are governed by the laws of India. Courts at Kolkata, West Bengal shall have jurisdiction.</p>
        <h2>11. Contact and grievances</h2>
        <Grievance />
      </>
    ),
  },

  'privacy-policy': {
    title: 'Privacy Policy',
    intro: 'How we collect, use and protect your personal data, in line with the Digital Personal Data Protection Act, 2023.',
    body: (
      <>
        <h2>1. Who we are</h2>
        <p><Org />, {site.legalAddress}, is the Data Fiduciary for personal data collected through <strong>bengalvets.org</strong> and through registration for the 54th Reunion.</p>
        <h2>2. What we collect</h2>
        <ul>
          <li><strong>Registration details:</strong> name, e-mail, mobile and WhatsApp number, postal address, delegate category, batch / year and institution.</li>
          <li><strong>Payment details:</strong> amount, date and the payment reference given by the payment aggregator. We do <strong>not</strong> collect or store card numbers, CVV, net-banking passwords or UPI PINs.</li>
          <li><strong>Messages:</strong> anything you send us by e-mail, phone or WhatsApp.</li>
        </ul>
        <h2>3. Why we use it</h2>
        <ul>
          <li>To register you, confirm your payment and send your receipt.</li>
          <li>To send you Event information, reminders and changes.</li>
          <li>To prepare badges, attendance lists and, where announced, to deliver the delegate memento to your address.</li>
          <li>To keep accounts as required by law and to answer complaints.</li>
        </ul>
        <p>We use your data only for these purposes, with your consent given at registration. We do not sell or rent your data, and we do not use it for advertising.</p>
        <h2>4. Who we share it with</h2>
        <ul>
          <li>The payment aggregator and bank, only to process your payment.</li>
          <li>A courier or postal service, only if a memento is sent to your address.</li>
          <li>Members of the Organizing Committee who need it for their work.</li>
          <li>Government authorities, only when the law requires.</li>
        </ul>
        <h2>5. Cookies and tracking</h2>
        <p>This Website does not use advertising or tracking cookies and does not run analytics that identify you. Videos come from YouTube in privacy-enhanced mode and load only after you press play; YouTube’s own privacy policy then applies.</p>
        <h2>6. How long we keep it</h2>
        <p>We keep registration data until the accounts of the Reunion are closed and audited, and payment records for as long as the law requires. After that we delete it or keep it only in anonymous form.</p>
        <h2>7. Security</h2>
        <p>The Website runs only on encrypted HTTPS. Registration data is kept in password-protected accounts that only authorised committee members can open.</p>
        <h2>8. Your rights</h2>
        <p>You may ask us to see, correct, update or delete your personal data, withdraw your consent, or nominate another person to act for you. Write to the Grievance Officer below. If you are not satisfied with our reply, you may approach the Data Protection Board of India.</p>
        <h2>9. Children</h2>
        <p>If a delegate is under 18, the data must be given with the consent of a parent or guardian.</p>
        <h2>10. Changes to this policy</h2>
        <p>If we change this policy, the new version will be posted on this page with a new date.</p>
        <h2>11. Grievance Officer</h2>
        <Grievance />
      </>
    ),
  },

  'refund-and-cancellation-policy': {
    title: 'Refund & Cancellation Policy',
    intro: 'Please read this before you pay the registration fee.',
    body: (
      <>
        <h2>1. General rule</h2>
        <p>The registration fee for the 54th Reunion is <strong>not refundable</strong> once paid, <strong>except</strong> in the cases listed below. A registration cannot be cancelled by the delegate for a refund, but you may tell us if you cannot attend.</p>
        <h2>2. When we refund</h2>
        <ul>
          <li><strong>Event cancelled:</strong> if the Organizing Committee cancels the Reunion, every delegate gets a full refund of the registration fee.</li>
          <li><strong>Double payment:</strong> if the same delegate is charged more than once for the same registration, the extra amount is refunded.</li>
          <li><strong>Failed registration:</strong> if money is debited but the registration is not completed, the amount is refunded (or the registration is completed, if you prefer).</li>
        </ul>
        <h2>3. How to ask for a refund</h2>
        <p>E-mail <Mail /> with your name, mobile number, delegate category, date of payment and the payment reference (transaction ID). A screenshot of the debit helps.</p>
        <h2>4. Time and mode of refund</h2>
        <p>After we verify the case, the refund is sent to the <strong>same account / card / UPI ID</strong> used for payment, within <strong>7–10 working days</strong>. Your bank may take a few more days to show it. We do not refund in cash.</p>
        <h2>5. Failed or pending payments</h2>
        <p>If a payment is shown as failed but money is debited, it is usually reversed automatically by your bank or the payment aggregator. If it is not reversed within 7 working days, please write to us.</p>
        <h2>6. Contact</h2>
        <Grievance />
      </>
    ),
  },

  'shipping-and-delivery-policy': {
    title: 'Shipping & Delivery Policy',
    intro: 'What you receive after you register, and how.',
    body: (
      <>
        <h2>1. What you buy</h2>
        <p>The registration fee is for a <strong>service</strong> — participation in the 54th Reunion on {site.dateLong} at {site.venueName}. No goods are sold or shipped through this Website.</p>
        <h2>2. Confirmation</h2>
        <p>Your registration confirmation and payment receipt are delivered <strong>by e-mail</strong> to the address you give at registration. If you do not receive it within 24 hours of payment, please check your spam folder and then write to <Mail />.</p>
        <h2>3. Delegate kit and memento</h2>
        <p>Details of the delegate kit and memento — including how and when they will be given or delivered — will be announced on this Website and sent to registered delegates. Where a memento is sent by post or courier, it will go to the postal address given at registration, within India.</p>
        <h2>4. Contact</h2>
        <p>For any delivery question: <Mail /> · <Tel /></p>
      </>
    ),
  },

  'not-found': {
    title: 'Page not found',
    intro: 'Sorry, this page does not exist or has moved.',
    body: (<p><a href="/">Go to the home page</a> or write to <Mail />.</p>),
  },

  disclaimer: {
    title: 'Disclaimer',
    intro: 'Please read this note about the information on this website.',
    body: (
      <>
        <p>The information on <strong>bengalvets.org</strong> is given in good faith for members of the veterinary fraternity. We try to keep it correct and up to date, but programme details, timings and names may change. Please check this Website for the latest information.</p>
        <p>The logos of Bengal Veterinary College (Calcutta University), Bidhan Chandra Krishi Viswavidyalaya and West Bengal University of Animal &amp; Fishery Sciences belong to those institutions. This Website is run by <Org /> for the Reunion of their past and present students.</p>
        <p>Links to other websites (for example YouTube or Google Maps) are given for convenience. We are not responsible for the content or privacy practices of those websites.</p>
        <p>For any correction, please write to <Mail />.</p>
      </>
    ),
  },
};
