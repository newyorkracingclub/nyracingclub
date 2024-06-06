import React from 'react';

export default function Donate() {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <input type="hidden" name="hosted_button_id" value="ZBY8LGG7LVHC8" />
      <button type="submit">DONATE</button>
    </form>
  );
}
