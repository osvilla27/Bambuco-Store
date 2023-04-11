import { Section } from 'globalStyles';
import styled from 'styled-components';

export const FooterWrapper = styled(Section)`
	background: ${({ theme }) => theme.COLORS.dark};
	padding: 50px;
	.footer_inner {
		display: flex;
		justify-content: space-between;
		width: 100%;
		@media (max-width: 480px) {
			flex-direction: column;
			align-items: center;
		}
	}
    a {
        color:  ${({ theme }) => theme.COLORS.light}
    }
`;
export const FooterLinks = styled.div`
	.logo {
		max-width: 15rem;
		img {
			filter: invert(50%);
		}
	}
	.social-icons {
		margin-top: 4rem;
        color: ${({ theme }) => theme.COLORS.light};
		img {
			max-width: 2rem;
			margin-right: 1rem;
		}
	}
	display: flex;
	width: 60%;
	justify-content: space-between;
	.link {
		display: flex;
		flex-direction: column;
		a {
			margin-bottom: 1rem;
		}
	}
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: center;
		.footer-top {
			padding-bottom: 1.5rem;
			text-align: center;
		}
	}
`;

export const Copyright = styled(FooterLinks)`
  width: 100%;
  a {
    margin-top: 30px;
  }
`;


