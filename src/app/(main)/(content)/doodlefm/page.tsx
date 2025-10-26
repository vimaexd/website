import PageContainer from "@mae/components/core/PageContainer";
import PageHeader from "@mae/components/core/PageHeader";
import React, { Fragment } from "react";
import CreditBlock from "./CreditBlock";

import PfpEllie from './pfps/ellie53.jpg';
import PfpThermia from './pfps/thermia.webp';
import PfpZaire from './pfps/claire.webp';
import PfpCrayyn from './pfps/crayyn.webp'
import PfpIvy from './pfps/ivy.webp';
import PfpJulia from './pfps/julia.png';

export default function DoodleFMPage() {
    return (
        <PageContainer>
            <PageHeader title="Doodle FM Credits"></PageHeader>

            <CreditBlock
                name="vimae"
                roles={[
                    "Production", 
                    "Host", 
                    "Overlay Developer / Operator",
                    "Doodle Trivia Themes", 
                    "Doodle Travel Theme", 
                    "Ad - Paracetamol",
                    "Ad - Ceiling Bird (production)"
                ]}
                imageUrl="/assets/pfp.png"
                link="/"
            />
            <CreditBlock
                name="Ellie53"
                roles={[
                    "Jingle Production",
                    "Ad - Magical Hearts XX: Upgrade Ultimate ~EXTENSION~ DESTROYER Ascend!",
                ]}
                imageUrl={PfpEllie}
                link="https://ellie53.neocities.org"
            />
            <CreditBlock
                name="thermia"
                roles={["Ident Voiceover"]}
                imageUrl={PfpThermia}
                link="https://girlthi.ng/~thermia"
            />
            <CreditBlock
                name="zaire"
                roles={[
                    "Ad - BeefBox",
                    "Ad - Pocket Transgirl",
                    "Ad - Chair Hospital",
                    "Ad - F150 (production)",
                    "Ad - Ceiling Bird (idea)",
                    "Co-host",
                ]}
                imageUrl={PfpZaire}
                link="https://supitszaire.com"
            />
            <CreditBlock
                name="Crayyn"
                roles={[
                    "Ad - Unregistered Transmission",
                    "Ad - Chair Hospital",
                    "Ad - F150",
                ]}
                imageUrl={PfpCrayyn}
                link=""
            />
            <CreditBlock
                name="IvyNyabula"
                roles={[
                    "Ad - Lewis Daimon Rehabilitation Center"
                ]}
                imageUrl={PfpIvy}
                link="https://ivynyabula.cc"
            />
            <CreditBlock
                name="Julia"
                roles={[
                    "Caller Voiceover",
                    "Ad - Ceiling Bird (voice)"
                ]}
                imageUrl={PfpJulia}
                link="https://insertdomain.name"
            />

            <h2 className="text-2xl font-semibold">Setlist</h2>
            <ul className="list-disc list-inside">
                <li>Loudar - Mind Disco</li>
                <li>
                    halfTrue, Suroki, swoof, nuclear catbomb & lunaa - EXTRA!
                </li>
                <li>webcage - self-esteem</li>
                <li>Jamie Paige - I Wish That I Could Fall</li>
                <li>ari melody - fifty bangers!!</li>
                <li>vimae - personal space</li>
                <li>Ellie53 - THIS IS NOT A TEST</li>
                <li>zaire - ID</li>
                <li>zaire - ID</li>
                <li>Loudar - Vertigo</li>
                <li>ari melody - falling asleep (house version)</li>
                <li>disphing - inlet</li>
                <li>Arlie, JUKO, nuumi & ecocyde - ASK HIM OUT!</li>
                <li>vimae - fck440</li>
                <li>underscores - Stick the landing</li>
                <li>ari melody - FTL (Faster Than Light)</li>
            </ul>

            <ul>
                <li>
                    Background Music:{" "}
                    <a href="https://www.youtube.com/watch?v=LccSwm-MLhA">
                        disphing - incentive
                    </a>
                </li>
            </ul>

            <iframe
                width="100%"
                height="450"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2101417831%3Fsecret_token%3Ds-oLV4djLUnQH&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
        </PageContainer>
    );
}
