import { Typography, Container } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Panel } from "components/ui/Panel";
import { IInsightsDay } from "api/types";

interface Props {
  insights?: IInsightsDay;
  isLoading: boolean;
  fetchInsights: () => void;
}

export const TodaysInsights = ({ insights, isLoading, fetchInsights } : Props) => {
  return (
    <Panel title="Today's Insights">
      <Container sx={{width:'inherit'}}>
        { !insights && <LoadingButton variant="contained" loading={isLoading} onClick={fetchInsights} >Get Insights</LoadingButton>  }
        
        <Typography variant="body2" color="text" sx={{fontSize: '18px'}}>
          {insights && insights.insightsContent.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
      </Container>
    </Panel>
  );
}