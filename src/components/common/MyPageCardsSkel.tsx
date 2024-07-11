"use client";

import {CardList, SkeletonSpan} from "@/styles/ComponentStyles";
import {MyId} from "@/styles/MypageStyles";

export default function MyPageCardSkel() {
	return (
		<>
			<h2>My page</h2>
			<MyId><SkeletonSpan display="inline-block" width="220px" height="16px" margin="0 0 0 0" border-radius="8px"/></MyId>
			<CardList>
				<li>
					<SkeletonSpan width="140px" height="16px" margin="0 0 0 0" border-radius="8px"/>
					<SkeletonSpan width="200px" height="40px" margin="60px 0 0 0" border-radius="8px"/>
					<SkeletonSpan width="100px" height="40px" margin="24px 0 0 0" border-radius="8px"/>
					<SkeletonSpan display="inline-block" width="80px" height="16px" margin="40px 0 0 0" border-radius="8px"/>            
					<SkeletonSpan display="inline-block" width="40px" height="16px" margin="40px 0 0 24px" border-radius="8px"/>
					<SkeletonSpan width="120px" height="24px" margin="40px 0 0 0" border-radius="8px"/>
				</li>
			</CardList>
		</>
	)
}