import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export default function SocialLoginButton() {
    return (
        <Wrapper>
            <ButtonWrapper>
                <Link className='link' href={`${BASE_URL}/auth/google`}>
                    <img style={{ width: '25px', height: '25px' }} src="/google.png" />
                    <span>Google</span>
                </Link>
                <Link className='link' href={`${BASE_URL}/auth/twitter`}>
                    <img style={{ width: '25px', height: '25px' }} src="/twitter.png" />
                    <span>Twitter</span>
                </Link>
                <Link className='link' href={`${BASE_URL}/auth/github`}>
                    <img style={{ width: '25px', height: '25px' }} src="/github.png" />
                    <span>Github</span>
                </Link>
            </ButtonWrapper>
            <Line>
                <div className='line'>
                    <div className='or'>OR</div>
                </div>
            </Line>

        </Wrapper>
    )
}

const Wrapper = styled.div`
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: centere;
    padding: 10px 0;
    gap: 10px;

    .link {
        border: 1px solid #cbcbcb;
        display: flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 0px 5px 0px #ddd, -1px -0px 5px 0px #ddd;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.2rem;
        transition: .3s;
        cursor: pointer;
        text-decoration: none;
        font-weight: 530;
        flex-grow: 1;

        &:hover{
            background: #e5e2e2;
        }

        span {
            margin-left: 3px;
        }
    }
`
const Line = styled.div`
    padding: 20px 0;
    position: relative;

    .line {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .or {
        position: absolute;
        width: 30px;
        height: 30px;
        background: #fff;
        left: 50%;
        color: #000;
        border-radius: 50%;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`