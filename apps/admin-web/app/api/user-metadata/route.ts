import { NextRequest, NextResponse } from 'next/server';
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { withSession } from "supertokens-node/nextjs";
import SuperTokens from "supertokens-node";
import { backendConfig } from '@promptus/web/auth/util/server';
SuperTokens.init(backendConfig());

export async function POST(request: NextRequest) {

    return withSession(request, async (err, session) => {
        if (err) {
            return NextResponse.json(err, { status: 500 });
        }

        try {
            const userId = session!.getUserId();
            const body = await request.json();
            const { key, value } = body;

            await UserMetadata.updateUserMetadata(userId, { [key]: value });
            return NextResponse.json({ message: 'Metadata updated', data: { userId, [key]: value } });
        } catch (error) {
            return NextResponse.json({ message: 'Fail during metadata update', error }, { status: 500 });
        }
    });


}
