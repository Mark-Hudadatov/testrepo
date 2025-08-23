import pandas as pd
import dash
from dash import html, dcc
from dash.dependencies import Input, Output
import plotly.express as px

# ---- Data ----
spacex_df = pd.read_csv("spacex_launch_dash.csv")
max_payload = spacex_df['Payload Mass (kg)'].max()
min_payload = spacex_df['Payload Mass (kg)'].min()

# ---- App ----
app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div([
    html.H1('SpaceX Launch Records Dashboard',
            style={'textAlign': 'center', 'color': '#503D36', 'font-size': 40}),
    dcc.Dropdown(
        id='site-dropdown',
        options=[
            {'label': 'All Sites', 'value': 'ALL'},
            {'label': 'CCAFS LC-40', 'value': 'CCAFS LC-40'},
            {'label': 'VAFB SLC-4E', 'value': 'VAFB SLC-4E'},
            {'label': 'KSC LC-39A', 'value': 'KSC LC-39A'},
            {'label': 'CCAFS SLC-40', 'value': 'CCAFS SLC-40'},
        ],
        value='ALL', placeholder="Select a Launch Site here", searchable=True
    ),
    html.Br(),
    dcc.Graph(id='success-pie-chart'),
    html.Br(),
    html.P("Payload range (Kg):"),
    dcc.RangeSlider(
        id='payload-slider',
        min=0, max=10000, step=1000,
        marks={0: '0', 2500:'2500', 5000:'5000', 7500:'7500', 10000:'10000'},
        value=[min_payload, max_payload]
    ),
    dcc.Graph(id='success-payload-scatter-chart'),
])

# ---- Callbacks ----
@app.callback(
    Output('success-pie-chart', 'figure'),
    Input('site-dropdown', 'value')
)
def update_pie(entered_site):
    if entered_site == 'ALL':
        # Sum successes by site
        fig = px.pie(spacex_df, values='class', names='Launch Site',
                     title='Total Success Launches by Site')
    else:
        df = spacex_df[spacex_df['Launch Site'] == entered_site]
        # Count success vs failure
        fig = px.pie(df, names='class',
                     title=f'Success vs Failure for {entered_site}')
    return fig

@app.callback(
    Output('success-payload-scatter-chart', 'figure'),
    [Input('site-dropdown', 'value'),
     Input('payload-slider', 'value')]
)
def update_scatter(entered_site, payload_range):
    low, high = payload_range
    df = spacex_df[(spacex_df['Payload Mass (kg)'] >= low) &
                   (spacex_df['Payload Mass (kg)'] <= high)]
    if entered_site != 'ALL':
        df = df[df['Launch Site'] == entered_site]

    fig = px.scatter(df, x='Payload Mass (kg)', y='class',
                     color='Booster Version Category',
                     title=('Correlation between Payload and Success'
                            f"{'' if entered_site=='ALL' else f' — {entered_site}'}"))
    return fig

if __name__ == '__main__':
    # old (removed): app.run_server(debug=True)
    app.run(debug=True, host='0.0.0.0', port=8051)
