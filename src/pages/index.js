import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <h1>안녕하세요. <span class="badge badge-light">Yuri</span>입니다.</h1>
    <p>Yuri는 웹 프론트 애플리케이션을 쉽고 빠르게 제작하기 위해 만들어진 프레임워크입니다.</p>
	<h3 className="mg-t-3">Yuri의 핵심 5가지</h3>
	<h4 className="mg-t-2">1. Yuri-Grid</h4>
	<p>대충 12 그리드인 이미지</p>
	<p>대충 12 그리드인 이미지</p>
	<h4 className="mg-t-2">2. Yuri-Convenience</h4>
	<p>대충 편의 기능들</p>
	<h4 className="mg-t-2">3. Yuri-Components</h4>
	<p>대충 컴포넌트들</p>
	<h4 className="mg-t-2">4. Yuri-Night</h4>
	<p>대충 나이트 모드</p>
	<h4 className="mg-t-2">5. Yuri-Customize</h4>
	<p>대충 커스터마이징이 쉽게 가능한</p>
  </Layout>
)

export default IndexPage
