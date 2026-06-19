/*!
  Copyright 2013 Lovell Fuller and others.
  SPDX-License-Identifier: Apache-2.0
*/

import channel from './channel.mjs';
import colour from './colour.mjs';
import composite from './composite.mjs';
import Sharp from './constructor.mjs';
import input from './input.mjs';
import operation from './operation.mjs';
import output from './output.mjs';
import resize from './resize.mjs';
import utility from './utility.mjs';

input(Sharp);
resize(Sharp);
composite(Sharp);
operation(Sharp);
colour(Sharp);
channel(Sharp);
output(Sharp);
utility(Sharp);

export default Sharp;
