import { VercelRequest, VercelResponse } from '@vercel/node';

export default function(request: VercelRequest, response: VercelResponse) {
   const { user, email, image } = request.body;

   return response.json({user, email,image});
}